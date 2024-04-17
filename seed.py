from models import db, Calendar
from app import app
from flask import send_from_directory

#file = open("src/images/scheduledefault.jpg")


with app.app_context():
    Calendar.query.delete()
    # folder = "src/images"
    # file = send_from_directory(folder, 'scheduledefault.jpg')
    # new_entry = Calendar(
    # image = "./images/scheduledefault.JPG"
    # )
    # db.session.add(new_entry)
    db.session.commit()