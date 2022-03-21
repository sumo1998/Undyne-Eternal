# Have changed the structure from what we discussed
# Removed the structure of "client" module and just added a common templates folder
# Made it like this to make the structure conform to what flask expects. Just a little less manual path specification
# But if the project grows bigger, we can change the structure to be more modular
import os

from flask import Flask, render_template, redirect, url_for, request
from api.auth import auth_router
from flask import Flask, render_template, redirect, url_for, request, jsonify, session
from dotenv import load_dotenv, find_dotenv
from factory import object_factory

load_dotenv(find_dotenv())

from db.home import home_handler
from db.user import user_handler
from db.level import level_handler
from db import database_handler

load_dotenv(find_dotenv())

app = Flask(__name__)
app.config['TEMPLATES_AUTO_RELOAD'] = True
app.secret_key = os.getenv('APP_SECRET')
object_factory._create_auth_object(app)

app.register_blueprint(auth_router.auth_blueprint)


@app.before_first_request
def init():
    database_handler.setup()


@app.route("/")
def home_page():
    return redirect(url_for("feed_get"))



@app.route("/search", methods=['POST'])
def feed_search():
    data = request.get_json()
    res = home_handler.get_home_feed(data)
    return render_template("home/search_results.html", res = res)

@app.route("/home-feed", methods=['GET'])
def feed_get():
    data = request.get_json()
    res = home_handler.get_home_feed(data)
    return render_template("home/home_template.html", res = res)


@app.route("/game")
def game():
    return render_template("game/game.html")


@app.route("/user/<id>")
def user(id):
    user_info = user_handler.get_user_info(id)
    user_levels = user_handler.get_user_levels(id)
    level_count = len(user_levels)
    test_session = {"profile": {
        "user_id": 3
    }};
    return render_template("profile/profile_template.html", user_info = user_info, user_levels = user_levels, level_count=level_count,
                            session=test_session)


@app.route("/level/<id>")
def level(id):
    level_info = level_handler.get_level_info(id)
    level_comments = level_handler.get_level_comments(id)
    test_session = {"profile": {
        "user_id": 1
    }};
    return render_template("level/level_template.html", levelInfo = level_info, levelComments = level_comments, session=test_session)


@app.route("/add-comment", methods = ['POST'])
def add_comment():
    data = {
        "userId": request.form.get('user'),
        "commentBody": request.form.get('comment'),
        "levelId": request.form.get('level'),
        "commentRating": request.form.get('rating')
    }
    level_handler.add_level_comment(data)
    return redirect(url_for("level", id = data['levelId']))


@app.route("/update-comment", methods = ['PATCH'])
def update_comment():
    data = request.form
    data = {
        "commentBody": request.form.get("comment"),
        "commentRating": request.form.get("rating"),
        "commentId": request.form.get("comment_id")
    }
    level_handler.update_level_comment(data)
    return jsonify({"result": "success"})


@app.route("/delete-comment", methods = ['DELETE'])
def delete_comment():
    data = request.form
    level_handler.delete_comment(data)
    return jsonify({"result": "success"})


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
    data = request.json
    user_handler.update_user(data)
    return redirect(url_for("user", id = data["userId"]))


if __name__ == '__main__':
    app.run()
