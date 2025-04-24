from flask import Flask
from models import db
from flask_migrate import Migrate
from dotenv import load_dotenv
load_dotenv()
import os

app= Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI']=os.getenv('SQLALCHEMY_DATABASE_URI')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False

db.init_app(app)
migrate=Migrate(app,db)


if __name__=='__main__':
    app.run(port=5555, debug=True)