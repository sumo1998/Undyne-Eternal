# Have changed the structure from what we discussed
# Removed the structure of "client" module and just added a common templates folder
# Made it like this to make the structure conform to what flask expects. Just a little less manual path specification
# But if the project grows bigger, we can change the structure to be more modular

from flask import Flask,render_template
from factory import object_factory

from db.home import home_handler
from db.user import user_handler
from db.level import level_handler
from db import database_handler

app = Flask(__name__)
app.secret_key='21344'
object_factory.get_auth_object(app)
from api.auth import auth_router

app.register_blueprint(auth_router.auth_blueprint)

@app.before_first_request
def init():
    database_handler.setup()

@app.route("/")
def home_page():
    return "<h1>This is the homepage for the app</h1>"

@app.route("/home_feed")
def feed():
    res = home_handler.getHomeFeed()
    return render_template("home/home_template.html",res=res)

@app.route("/user/<id>")
def user(id):
    userInfo = user_handler.getUserInfo(id)
    userLevels = user_handler.getUserLevels(id)
    return render_template("profile/profile_template.html",userInfo=userInfo, userLevels=userLevels)

@app.route("/level/<id>")
def level(id):
    levelInfo = level_handler.getLevelInfo(id)
    levelComments = level_handler.getLevelComments(id)
    return render_template("level/level_template.html",levelInfo=levelInfo,levelComments=levelComments)
if __name__ == '__main__':
    app.run()
