import os
from flask import Flask, make_response, request, jsonify, send_from_directory, flash, redirect, url_for
from flask_migrate import Migrate
from models import db, Calendar
from flask_cors import CORS, cross_origin
from werkzeug.utils import secure_filename

UPLOAD_FOLDER = "src\images"
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}
## Here we initialize the flask app 
app = Flask(__name__, static_url_path = '', static_folder = 'build')
CORS(app)
## Here we created the database
# for info to migrate database https://flask-migrate.readthedocs.io/en/latest/
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///calendar.db'
app.config['SQLALCHEMY_TRAKC_MODIFICATIONS'] = False
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['SECRET_KEY'] = 'supersecretkey'

# here we migrate to the database
migrate = Migrate(app, db)
db.init_app(app)


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

## this is serving the static website 
@app.route('/')
def root_page():
    return send_from_directory(app.static_folder, 'index.html')


## created this to process a get request for the image
@app.route('/image', methods = ['GET','PATCH', 'POST', 'PUT'])
@cross_origin()
def image_page():
    # if request.method == 'GET':
    #     blog_list = [this.to_dict() for this in Calendar.query.all()]
    #     return make_response(
    #     blog_list,
    #     200
    #     )
    # if request.method == 'PUT':
    #     # form_data = request.get_json()
    #     # image_data = form_data.get('image')
    #     image_data = request.files['image']
    #     image_data.save(os.path.join(app.config['UPLOAD_FOLDER'], image_data))
    #     # new_image = Calendar(
    #     # image = image_data
    #     # )
    #     getImage = Calendar.query.filter_by(id=1).first()
    #     getImage.image = image_data
    #     # db.session.add(new_image)
    #     db.session.commit()
    #     return make_response(
    #     getImage.to_dict(),
    #     200
    # )
    if request.method == 'POST':
        ### here I get the file front the frontend
        file = request.files['image']
        if 'image' not in request.files:
            flash('No file part')
            return redirect(request.url)
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], "scheduledefault.JPG"))
            flash("file successfully uploaded")
            return send_from_directory(app.static_folder, 'index.html')
        # test = file.read()
        # print(file)
        # with open(file.filename, 'rb') as f:
        #     contents = f.read()
        # return "dpne"
        #bytesStr = file.read()
        # If the user does not select a file, the browser submits an
        # empty file without a filename.
        #return f'Upload: {file.filename}'
        # newImage = Calendar(
        # image = contents
        #     )
        # db.session.add(newImage)
        # db.session.commit()
        ### here im saving the file to desired directory and labeling the file to my liking
        #file.save(os.path.join(app.config['UPLOAD_FOLDER'], "scheduledefault.JPG"))
        #newFile = os.path.join(app.config['UPLOAD_FOLDER'], "scheduledefault.JPG")
       # getImage = Calendar.query.filter_by(id=1).first()
        #getImage.image = newFile
        #db.session.commit()
        # return make_response(  
        # newImage.to_dict(),
        # 200
        # )
## send from directory takes two arguments
## one is the folder, and the seoncd is the filename 
# @app.route('/temp')
# def temp_route():
#     something = 'src/images'
#     filenamey = send_from_directory(something, 'scheduledefault.jpg' )
#     return(
#     make_response(filenamey)
#     )

## Here I crerate a path to get the file labled "scheduledefault and serve it to the front end"
    
@app.route('/uploads', methods = ['GET'])
@cross_origin()
def serve_image():
    return send_from_directory(app.config['UPLOAD_FOLDER'], "scheduledefault.JPG")

#port = int(os.environ.get("PORT", 17995))

## this is where we run the server, no port is specified 
if __name__ == "__main__":
        app.run()
