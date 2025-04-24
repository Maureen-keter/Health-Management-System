from flask import Flask,request, make_response, jsonify
from flask_restful import Api, Resource, abort
from models import User

class Users(Resource):
    def get(self):
        users_dict_list=[user.to_dict() for user in User.query.all()]
        make_response(jsonify(users_dict_list), 200)

    def post(self):
        data=request.get_json()
        existing_user=User.query.filter_by(email=data['email'].first())
        if existing_user:
            abort(409, detail="User already exists")
    

        
