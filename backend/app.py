from flask import Flask
from models import db
from flask_migrate import Migrate

app= Flask(__name__)

migrate=Migrate(app,db)


if __name__=='__main__':
    app.run(port=5555, debug=True)