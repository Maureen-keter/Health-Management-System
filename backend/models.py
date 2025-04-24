from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from datetime import datetime
import re



db=SQLAlchemy()

class User(db.Model, SerializerMixin):
    __tablename__='users'
    id=db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String(100), required=True)
    email=db.Column(db.String(100), unique=True)
    contact=db.Column(db.Integer(50))
    password=db.Column(db.String(50))

    enrollments=db.relationship("Enrollment", backref="user" lazy=True)

    @validates('email')
    def validate_email(self, key, email):
        if not re.match(r"[^@]+@[^@]+\.[^@]+", email):
            raise ValueError("Invalid email address")
        return email
    

class Program(db.Model, SerializerMixin):
    __tablename__='programs'
    id=db.Column(db.Integer, primary_key=True)
    name=db.Column(db.Sring(255), required=True)
    description=db.Column(db.String)

class Enrollment(db.Model, SerializerMixin):
    __tablename__='enrollments'
    id=db.Column(db.Integer, primary_key=True)
    published_date = db.Column(db.DateTime, default=datetime.utcnow)

    user_id=db.Column(db.Integer, db.ForeignKey('users.id'))
    program_id=db.Column(db.Integer, db.ForeignKey('programs.id'))
