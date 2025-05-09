from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from datetime import datetime
import re



db=SQLAlchemy()

class User(db.Model, SerializerMixin):
    __tablename__='users'
    # serialize_rules = ('-enrollments')

    id=db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String(100), nullable=False)
    email=db.Column(db.String(100), unique=True)
    contact=db.Column(db.String)
    password=db.Column(db.String(50))

    enrollments=db.relationship("Enrollment", backref="user", lazy=True)

    @validates('email')
    def validate_email(self, key, email):
        if not re.match(r"[^@]+@[^@]+\.[^@]+", email):
            raise ValueError("Invalid email address")
        return email
    

class Program(db.Model, SerializerMixin):
    __tablename__='programs'

    serialize_rules = ('-enrollments',)
    id=db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String(255), nullable=False)
    description=db.Column(db.String)

    enrollments=db.relationship("Enrollment", backref="program", lazy=True)

class Enrollment(db.Model, SerializerMixin):
    __tablename__='enrollments'

    serialize_rules = ('-user', '-program')
    id=db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.Date, default=lambda: datetime.utcnow().date())

    user_id=db.Column(db.Integer, db.ForeignKey('users.id'))
    program_id=db.Column(db.Integer, db.ForeignKey('programs.id'))

    
