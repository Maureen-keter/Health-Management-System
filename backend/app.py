from flask import Flask, make_response
from models import db
from flask_migrate import Migrate
from flask_restful import Resource, Api
from flask_cors import CORS
from datetime import timedelta
from dotenv import load_dotenv
load_dotenv()
import os

from controllers.users import Users, UserById, UserLogin, UserByToken,jwt
from controllers.programs import Programs, ProgramById
from controllers.enrollments import Enrollments, EnrollmentById


app= Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///health.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
app.json.compact = False
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=24)
app.config['SECRET_KEY'] =('tvbubvhriefjkwerty=')

db.init_app(app)
migrate=Migrate(app,db)

jwt.init_app(app)

CORS(app)
api=Api(app)

class Home(Resource):
    def get(self):
        response_dict={
            "message":"Health Management System API",
        }
        response=make_response(
            response_dict, 200
        )
        return response

api.add_resource(Home, '/')
api.add_resource(Users, '/users')
api.add_resource(UserById, '/users/<int:id>')
api.add_resource(UserLogin,'/login')
api.add_resource(UserByToken,'/user-token')
api.add_resource(Programs, '/programs')
api.add_resource(ProgramById, '/programs/<int:id>')
api.add_resource(Enrollments, '/enrollments')
api.add_resource(EnrollmentById, '/enrollments/<int:id>')




if __name__=='__main__':
    app.run(port=5555, debug=True)