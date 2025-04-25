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
