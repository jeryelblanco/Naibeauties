from http import server
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin


db = SQLAlchemy()

class Calendar(db.Model, SerializerMixin):
    __tablename__ = "calendar image"
    
    id = db.Column(db.Integer, primary_key = True)
    image = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())