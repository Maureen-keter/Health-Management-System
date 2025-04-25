from flask import Flask, request, make_response, jsonify
from flask_restful import Api, Resource, abort
from models import Program, db

class Programs(Resource):
    def get(self):
        programs_dict = [program.to_dict() for program in Program.query.all()]
        return make_response(jsonify(programs_dict), 200)  

    def post(self):
        data = request.get_json()
        new_program = Program(name=data['name'], description=data['description'])
        db.session.add(new_program)
        db.session.commit()

        return make_response(jsonify(new_program.to_dict()), 201)

class ProgramById(Resource):
    def get(self, id):
        program = Program.query.filter_by(id=id).first()
        if not program:
            abort(404, detail="program not found")

        return make_response(jsonify(program.to_dict()), 200)

    def patch(self,id):
        program = Program.query.filter_by(id=id).first()
        if not program:
            abort(404, detail=f'program with {id=} does not exist')
        data=request.get_json()
        for key, value in data.items():
            if value is None:
                continue
            setattr(program, key, value)
        db.session.commit()
        return make_response(jsonify(program.to_dict()), 200)


    def delete(self, id):
        program = Program.query.filter_by(id=id).first()
        if not program:
            abort(404, detail=f'program with {id=} does not exist')
        db.session.delete(program)
        db.session.commit()
        return{"message": f"program with {id=} has been deleted"}
