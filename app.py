import json
import os

import pydantic
from dotenv import load_dotenv, find_dotenv
from flask import Flask, render_template, redirect, url_for, request, session, jsonify, abort

import auth_router
import utils
from db import database_handler
from db.home import home_handler
from db.level import level_handler, level_models
from db.level.level_models import CommentData
from db.user import user_handler
from factory import object_factory
from firebase_handler import Firebase
from level_data_model import LevelData

load_dotenv(find_dotenv())

app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True

app.secret_key = os.getenv("APP_SECRET")
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
    data = request.json
    if data is None:
        res = home_handler.get_homefeed()
    else:
        res = home_handler.get_homefeed_with_filters(data)
    return render_template("home/home_template.html", res = res)


@app.route("/search", methods = ["POST"])
def feed_search():
    data = request.get_json()
    if data:
        res = home_handler.get_homefeed_with_filters(data)
    else:
        res = home_handler.get_homefeed(data)
    return render_template("home/search_results.html", res = res)


@app.route("/game")
def game():
    level_data_json = """
    {"attacks": [
        {
            "attackDelay": 3200,
            "clockwiseShift": false,
            "arrows": [
                {"direction": "?", "reversed": false, "delay": 0, "speed": 100},
                {"direction": "?", "reversed": false, "delay": 600, "speed": 100},
                {"direction": "?", "reversed": false, "delay": 600, "speed": 100}
            ]
        },
        {
            "attackDelay": 4500,
            "clockwiseShift": false,
            "arrows": [
                {"direction": "U", "reversed": false, "delay": 0, "speed": 150},
                {"direction": "U", "reversed": false, "delay": 500, "speed": 150},
                {"direction": "L", "reversed": false, "delay": 500, "speed": 150},
                {"direction": "L", "reversed": false, "delay": 500, "speed": 150},
                {"direction": "R", "reversed": false, "delay": 500, "speed": 150},
                {"direction": "R", "reversed": false, "delay": 500, "speed": 150}
            ]
        },
        {
            "attackDelay": 4800,
            "clockwiseShift": true,
            "arrows": [
                {"direction": "L", "reversed": false, "delay": 0, "speed": 200},
                {"direction": "R", "reversed": false, "delay": 400, "speed": 200},
                {"direction": "L", "reversed": false, "delay": 400, "speed": 200},
                {"direction": "R", "reversed": false, "delay": 400, "speed": 200},
                {"direction": "R", "reversed": false, "delay": 400, "speed": 200},
                {"direction": "L", "reversed": false, "delay": 400, "speed": 200},
                {"direction": "L", "reversed": false, "delay": 400, "speed": 200},
                {"direction": "D", "reversed": false, "delay": 400, "speed": 200}
            ]
        },
        {
            "attackDelay": 4850,
            "clockwiseShift": true,
            "arrows": [
                {"direction": "D", "reversed": false, "delay": 0, "speed": 250},
                {"direction": "L", "reversed": false, "delay": 300, "speed": 250},
                {"direction": "U", "reversed": false, "delay": 300, "speed": 250},
                {"direction": "R", "reversed": false, "delay": 300, "speed": 250},
                {"direction": "D", "reversed": false, "delay": 300, "speed": 250},
                {"direction": "L", "reversed": false, "delay": 300, "speed": 250},
                {"direction": "U", "reversed": false, "delay": 300, "speed": 250},
                {"direction": "R", "reversed": false, "delay": 300, "speed": 250},
                {"direction": "D", "reversed": false, "delay": 300, "speed": 250},
                {"direction": "D", "reversed": false, "delay": 150, "speed": 250},
                {"direction": "D", "reversed": false, "delay": 150, "speed": 250},
                {"direction": "D", "reversed": false, "delay": 150, "speed": 250}
            ]
        },
        {
            "attackDelay": 4100,
            "clockwiseShift": true,
            "arrows": [
                {"direction": "R", "reversed": false, "delay": 0, "speed": 250},
                {"direction": "U", "reversed": false, "delay": 300, "speed": 250},
                {"direction": "U", "reversed": false, "delay": 150, "speed": 250},
                {"direction": "L", "reversed": false, "delay": 300, "speed": 250},
                {"direction": "U", "reversed": false, "delay": 300, "speed": 250},
                {"direction": "U", "reversed": false, "delay": 150, "speed": 250},
                {"direction": "R", "reversed": false, "delay": 300, "speed": 250},
                {"direction": "U", "reversed": false, "delay": 300, "speed": 250},
                {"direction": "D", "reversed": false, "delay": 300, "speed": 250}
            ]
        }
    ]}
    """
    
    level_data_json = json.loads(level_data_json)
    difficulty = "easy"
    
    return render_template("game/game.html", level_data_json = level_data_json, difficulty = difficulty, debug = False)


@app.route("/user/<id>")
def user(id):
    user_info = user_handler.get_user_info(id)
    if user_info:
        user_levels = user_handler.get_user_levels(user_info[0][0])
        level_count = len(user_levels)
        return render_template(
            "profile/profile_template.html", user_info = user_info, user_levels = user_levels, level_count = level_count
        )
    else:
        return ""


@app.route("/level/<level_id>")
def level(level_id):
    level_info = level_handler.get_level_info(level_id)
    level_comments = level_handler.get_level_comments(level_id)
    return render_template("level/level_template.html", levelInfo = level_info, levelComments = level_comments)


@app.route("/add-comment", methods = ["POST"])
def add_comment():
    comment_data = CommentData(
        **{
            "userId": request.form.get("user"),
            "commentBody": request.form.get("comment"),
            "levelId": request.form.get("level"),
            "commentRating": request.form.get("rating")
        }
    )
    level_handler.add_level_comment(comment_data)
    
    return redirect(url_for("level", level_id = comment_data.level_id))


@app.route("/update-comment", methods = ["PATCH"])
def update_comment():
    data = {
        "commentBody": request.form.get("comment"),
        "commentRating": request.form.get("rating"),
        "commentId": request.form.get("comment_id"),
        "levelId": request.form.get("level_id")
    }
    level_handler.update_level_comment(CommentData(**data))
    return jsonify({"result": "success"})


@app.route("/delete-comment", methods = ["DELETE"])
def delete_comment():
    data = request.form
    level_handler.delete_comment(data)
    return jsonify({"result": "success"})


@app.route("/level-creator/")
@utils.requires_auth
def level_creator():
    if session["profile"]["user_id"] is None:
        return feed()
    level_id = request.args.get("id")
    session["level_id"] = None
    if level_id is not None:
        level_data = level_handler.get_level_info(level_id)
        if session["profile"]["user_id"] != level_data[0][7]:
            return feed()
        
        session["level_id"] = level_id
        send = level_data[0]["level_description"]
        send["title"] = level_data[0]["level_name"]
        send["description"] = level_data[0]["level_summary"]
        send["difficulty"] = level_data[0]["level_diff"]
        send["isPublic"] = level_data[0]["level_published"]
    else:
        send = {
            "title": "Untitled",
            "description": "Add a description",
            "difficulty": "easy",
            "isPublic": False,
            "attacks": []
        }
    
    return render_template(
        "level_creator/level_creator.html", level_json = send, is_new_level = level_id is None,
        user_name = session['profile']['user_name']
    )


@app.route("/update-level", methods = ['PATCH'])
@utils.requires_auth
def update_level():
    current_level_data = level_handler.get_level_info(session['level_id'])
    
    client_level_data = request.get_json()
    try:
        level_data = LevelData(**client_level_data)
    except pydantic.ValidationError as e:
        response = str(e).replace("(type=value_error)", "")
        return jsonify(response = response)
    
    attacks = {
        "attacks": client_level_data['attacks']
    }
    update = {
        "levelId": session['level_id'],
        "levelName": level_data.title,
        "levelRating": current_level_data[0]['level_rating'],
        "levelSummary": level_data.description,
        "levelDescription": json.dumps(attacks),
        "levelDiff": level_data.difficulty,
        "levelPublished": level_data.is_public
    }
    level_handler.update_level(level_models.LevelData(**update))
    response = "Saved!"
    return jsonify(response = response)


@app.route("/delete-level", methods = ['DELETE'])
@utils.requires_auth
def delete_level():
    level_id = request.args.get("id")
    level_data = level_handler.get_level_info(level_id)
    if session['profile']['user_id'] != level_data[0][7]:
        return redirect(url_for('home'))
    
    level_handler.delete_level(level_id)
    return user(session['profile']['user_id'])


@app.route("/add-level", methods = ['POST'])
@utils.requires_auth
def add_level():
    client_level_data = request.get_json()
    try:
        level_data = LevelData(**client_level_data)
    except pydantic.ValidationError as e:
        response = str(e).replace("(type=value_error)", "")
        return jsonify(response = response)
    
    add = {
        "user_id": session['profile']['user_id'],
        "levelName": level_data.title,
        "levelRating": 0,
        "levelSummary": level_data.description,
        "levelDescription": json.dumps(
            {
                "attacks": client_level_data['attacks']
            }
        ),
        "levelDiff": level_data.difficulty,
        "levelPublished": level_data.is_public
    }
    session['level_id'] = level_handler.add_level(level_models.LevelData(**add))[0]
    return jsonify(
        response = "Saved!"
    )


@app.route("/update-user", methods = ['PATCH'])
def update_user():
    data = request.get_json()
    user_handler.update_user_avatar(data)
    return redirect(url_for("user", id = data["userId"]))


@app.route("/get-upload-path", methods = ['GET'])
@utils.requires_auth
def get_upload_path():
    file_type = request.args.get('fileType')
    if file_type not in {'png', 'jpeg'}:
        abort(403)
    return firebase_object.get_signed_url(
        file_name = f"{session['profile']['user_name']}_pfp.jpeg", file_type = file_type
    )


@app.route("/upload-completed", methods = ["POST"])
@utils.requires_auth
def upload_completed():
    file_url = firebase_object.get_file_url(file_name = f"{session['profile']['user_name']}_pfp.jpeg")
    user_handler.update_user_avatar(file_url)
    session['profile']['user_avatar'] = file_url
    return redirect(url_for("user", id = session['profile']['user_id']))


if __name__ == '__main__':
    app.run()
