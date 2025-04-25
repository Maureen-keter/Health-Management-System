from flask import Flask, request, make_response, jsonify
from flask_restful import Api, Resource, abort
from models import Enrollment, db
from datetime import datetime

class Enrollments(Resource):
    def get(self):
        enrollments_dict = [enrollment.to_dict() for enrollment in Enrollment.query.all()]
        return make_response(jsonify(enrollments_dict), 200) 

    def post(self):
        data = request.get_json()
        try:
            created_at = datetime.strptime(data.get('created_at'), '%Y-%m-%d').date() if data.get('created_at') else None
        except ValueError:
            return make_response({"error": "Invalid date format. Use YYYY-MM-DD."}, 400)
        new_enrollment = Enrollment(created_at=created_at, user_id=data['user_id'], program_id=data['program_id'])
        db.session.add(new_enrollment)
        db.session.commit()

        return make_response(jsonify(new_enrollment.to_dict()), 201)

class EnrollmentById(Resource):
    def get(self, id):
        enrollment = Enrollment.query.filter_by(id=id).first()
        if not enrollment:
            abort(404, detail="enrollment not found")

        return make_response(jsonify(enrollment.to_dict()), 200)

    def patch(self,id):
        enrollment = Enrollment.query.filter_by(id=id).first()
        if not enrollment:
            abort(404, detail=f'Enrollment with {id=} does not exist')
        data=request.get_json()
        for key, value in data.items():
            if value is None:
                continue
            setattr(enrollment, key, value)
        db.session.commit()
        return make_response(jsonify(enrollment.to_dict()), 200)


    def delete(self, id):
        enrollment = Enrollment.query.filter_by(id=id).first()
        if not enrollment:
            abort(404, detail=f'enrollment with {id=} does not exist')
        db.session.delete(enrollment)
        db.session.commit()
        return{"message": f"enrollment with {id=} has been deleted"}



