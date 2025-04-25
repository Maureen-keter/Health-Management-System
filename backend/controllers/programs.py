from flask import Flask, request, make_response, jsonify
from flask_restful import Api, Resource, abort
from models import Program, db

class Programs(Resource):
    def get(self):
        programs_dict = [program.to_dict() for program in Program.query.all()]
        return make_response(jsonify(programs_dict), 200)  

    
