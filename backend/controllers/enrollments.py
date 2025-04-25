from flask import Flask, request, make_response, jsonify
from flask_restful import Api, Resource, abort
from models import Enrollment, db

class Enrollments(Resource):
    def get(self):
        enrollments_dict = [enrollment.to_dict() for enrollment in Enrollment.query.all()]
        return make_response(jsonify(enrollments_dict), 200) 

    def post(self):
        data = request.get_json()
        new_enrollment = Enrollment(created_at=data['created_at'], user_id=data['user_id'], program_id=data['program_id'])
        db.session.add(new_enrollment)
        db.session.commit()

        return make_response(jsonify(new_enrollment.to_dict()), 201)
