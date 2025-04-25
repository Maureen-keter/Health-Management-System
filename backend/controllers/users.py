from flask import Flask, request, make_response, jsonify
from flask_restful import Resource, abort
from models import User, db
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity


bcrypt = Bcrypt()
jwt = JWTManager()



class Users(Resource):
    def get(self):
        users_dict_list = [user.to_dict() for user in User.query.all()]
        return make_response(jsonify(users_dict_list), 200)  # Added return statement

    def post(self):
        data = request.get_json()
        existing_user = User.query.filter_by(email=data['email']).first()
        if existing_user:
            abort(409, detail="User Already Exists")
        hashed_password = bcrypt.generate_password_hash(data['password'])
        new_user = User(name=data['name'], email=data['email'], contact=data["contact"], password=hashed_password)
        db.session.add(new_user)
        db.session.commit()
        return make_response(jsonify(new_user.to_dict()), 201)


    

class UserLogin(Resource):
    def post(self):
        data = request.get_json()
        user = User.query.filter_by(email=data['email']).first()
        if not user:
            abort(404, detail="User does not exist")
        if not bcrypt.check_password_hash(user.password, data['password']):
            abort(403, detail="Password is not correct")
        token = create_access_token(identity=user.email)
        return {"jwt-access-token": token}

class UserById(Resource):
    def get(self, id):
        user = User.query.get(id)
        if not user:
            abort(404, detail="user not found")
        
        user_data = {
            "id": user.id,
            "name": user.name,
            "email": user.email,
            "contact": user.contact,
            "enrollments": []
        }

        # Include the enrolled programs (avoid recursion)
        for enrollment in user.enrollments:
            program_data = {
                "id": enrollment.program.id,
                "name": enrollment.program.name,
                "description": enrollment.program.description
            }
            user_data["enrollments"].append(program_data)

        return make_response(jsonify(user_data), 200)

    def patch(self,id):
        user=User.query.get(id)
        if not user:
            abort(404, detail=f'user with {id=} does not exist')
        data=request.get_json()
        if 'password' in data:
            hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
            data['password'] = hashed_password

        # Update user attributes
        for key, value in data.items():
            if value is None:
                continue
            setattr(user, key, value)
        db.session.commit()
        return make_response(jsonify(user.to_dict()), 200)


    def delete(self, id):
        user=User.query.filter_by(id=id).first()
        if not user:
            abort(404, detail=f'user with {id=} does not exist')
        db.session.delete(user)
        db.session.commit()
        return{"message": f"user with {id=} has been deleted"}

class UserByToken(Resource):
    @jwt_required()
    def get(self):
        current_user_email = get_jwt_identity()
        print(current_user_email)
        current_user = User.query.filter_by(email=current_user_email).first()
        if not current_user:
            abort(404, detail="User not found")
        return make_response(jsonify(current_user.to_dict()), 200)
