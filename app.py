import os

from dotenv import load_dotenv, find_dotenv
from flask import Flask, render_template, redirect, url_for, request, session

import auth_router
import utils
from db import database_handler
from db.home import home_handler
from db.level import level_handler
from db.user import user_handler
from factory import object_factory
from firebase_handler import Firebase

load_dotenv(find_dotenv())

app = Flask(__name__)

app.secret_key = os.getenv('APP_SECRET')
object_factory._create_auth_object(app)

app.register_blueprint(auth_router.auth_blueprint)
firebase_object = Firebase()


@app.before_first_request
def init():
    database_handler.setup()


@app.route("/")
def home_page():
    return redirect(url_for("feed"))


@app.route("/home-feed")
def feed():
    return "<h1>This is the homepage for the app</h1><a href='game'>Click here</a>"


@app.route("/game")
def game():
    return render_template("game/game.html", level_data_json = level_data_json, difficulty = difficulty, debug = False)


@app.route("/home-feed")
def feed():
    data = request.json
    if data is None:
        res = home_handler.get_homefeed()
    else:
        res = home_handler.get_homefeed_with_filters(**data)
    return render_template("home/home_template.html", res = res)


@app.route("/user/<id>")
def user(id):
    user_info = user_handler.get_user_info(id)
    user_levels = user_handler.get_user_levels(id)
    return render_template("profile/profile_template.html", userInfo = user_info, userLevels = user_levels)


@app.route("/level/<id>")
def level(id):
    level_info = level_handler.get_level_info(id)
    level_comments = level_handler.get_level_comments(id)
    return render_template("level/level_template.html", levelInfo = level_info, levelComments = level_comments)


@app.route("/add-comment", methods = ['POST'])
def add_comment():
    data = request.form
    level_handler.add_level_comment(data)
    return redirect(url_for("level", id = data['levelId']))


@app.route("/update-comment", methods = ['PATCH'])
def update_comment():
    data = request.form
    level_handler.update_level_comment(data)
    return redirect(url_for("level", id = data['levelId']))


@app.route("/delete-comment", methods = ['DELETE'])
def delete_comment():
    data = request.form
    level_handler.delete_comment(data)
    return redirect(url_for("level", id = data['levelId']))


@app.route("/update-level", methods = ['PATCH'])
def update_level():
    data = request.form
    level_handler.update_level(data)
    return redirect(url_for("level", id = data['levelId']))


@app.route("/delete-level", methods = ['DELETE'])
def delete_level():
    data = request.form
    level_handler.delete_level(data)
    return redirect(url_for("home_page"))


@app.route("/add-level", methods = ['POST'])
def add_level():
    data = request.form
    level_handler.add_level(data)
    return redirect(url_for("home_page"))


@app.route("/update-user", methods = ['PATCH'])
def update_user():
    data = request.form
    user_handler.update_user(data)
    return redirect(url_for("user", id = data["userId"]))


@app.route("/get-upload-path", methods = ['GET'])
@utils.requires_auth
def get_upload_path():
    return firebase_object.get_signed_url(file_name = f"{session['profile']['user_name']}_pfp.jpeg")


if __name__ == '__main__':
    app.run()
