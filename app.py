# Have changed the structure from what we discussed
# Removed the structure of "client" module and just added a common templates' folder
# Made it like this to make the structure conform to what flask expects. Just a little less manual path specification
# But if the project grows bigger, we can change the structure to be more modular

from flask import Flask, render_template, redirect, url_for, request, jsonify, session
from api.auth import auth_router

from factory import object_factory

import pydantic
from level_data_model import LevelData
from db.home import home_handler
from db.user import user_handler
from db.level import level_handler
from db import database_handler

app = Flask(__name__)
app.secret_key = "21344"
object_factory.get_auth_object(app)

app.register_blueprint(auth_router.auth_blueprint)


@app.before_first_request
def init():
    database_handler.setup()


@app.route("/")
def home_page():
    return render_template("parent_template.html")


@app.route("/game")
def game():
    return render_template("game/game.html")


@app.route("/level-creator/")
def level_creator():
    level_id = request.args.get("id")
    new_level = {
        "title": "Untitled",
        "description": "Add a description",
        "difficulty": "Easy",
        "isPublic": False,
        "attacks": []
    }
    session['level_id'] = None
    send = {}
    if level_id is not None:
        level_data = level_handler.get_level_info((1,))
        session['level_id'] = level_id
        send = level_data[0]['level_description']
        send['title'] = level_data[0]['level_name']
        send['description'] = level_data[0]['level_summary']
        send['difficulty'] = level_data[0]['level_diff']
        # send['isPublic'] = level_data[0]['level_diff']
    else:
        send = new_level
    
    return render_template("level_creator/level_creator.html", level_json = send, is_new_level = level_id is None)


@app.route("/save-level/", methods = ["POST"])
def save_level():
    level_data = request.get_json()
    try:
        LevelData(**level_data)
    except pydantic.ValidationError as e:
        response = str(e).replace("(type=value_error)", "")
        return jsonify(response = response)
    
    attack_data = {
        "attacks": level_data["attacks"]
    }
    title = level_data["title"]
    description = level_data["description"]
    difficulty = level_data["difficulty"]
    is_public = level_data["isPublic"]
    response = "Saved!"
    
    return jsonify(response = response)


@app.route("/home-feed")
def feed():
    data = request.json
    print("DATA: " + str(data))
    res = home_handler.get_home_feed(data)
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
    data = request.get_json()
    user_handler.update_user(data)
    return redirect(url_for("user", id = data["userId"]))


if __name__ == '__main__':
    app.run()
