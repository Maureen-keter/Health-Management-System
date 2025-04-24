from flask import Flask,request, make_response, jsonify
from flask_restful import Api, Resource, abort
from models import User

class Users(Resource):
    def get(self):
        users_dict_list=[user.to_dict() for user in User.query.all()]
        make_response(jsonify(users_dict_list), 200)
        
        
