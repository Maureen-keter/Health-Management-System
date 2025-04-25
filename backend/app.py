from flask import Flask, make_response
from models import db
from flask_migrate import Migrate
from flask_restful import Resource, Api
from flask_cors import CORS
from dotenv import load_dotenv
load_dotenv()
import os

from controllers.users import Users, UserById


app= Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI']=os.getenv('SQLALCHEMY_DATABASE_URI')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False

db.init_app(app)
migrate=Migrate(app,db)

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


if __name__=='__main__':
    app.run(port=5555, debug=True)