from flask import Flask, request, make_response, jsonify
from flask_restful import Api, Resource, abort
from models import Enrollment, db

class Enrollments(Resource):
    def get(self):
        enrollments_dict = [enrollment.to_dict() for enrollment in Enrollment.query.all()]
        return make_response(jsonify(enrollments_dict), 200) 

    