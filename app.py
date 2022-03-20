# Have changed the structure from what we discussed
# Removed the structure of "client" module and just added a common templates' folder
# Made it like this to make the structure conform to what flask expects. Just a little less manual path specification
# But if the project grows bigger, we can change the structure to be more modular

from flask import Flask, render_template, request, jsonify, redirect, url_for

from api.auth import auth_router
from factory import object_factory

import pydantic
from level_data_model import LevelData

app = Flask(__name__)
app.secret_key = "21344"
object_factory.get_auth_object(app)

app.register_blueprint(auth_router.auth_blueprint)


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
    # From database
    level_json = {
        "attacks": [
            {
                "attackDelay": 1000,
                "clockwiseShift": True,
                "arrows": [
                    {"direction": "U", "reversed": False, "delay": 1, "speed": 9},
                    {"direction": "D", "reversed": False, "delay": 2, "speed": 8},
                    {"direction": "R", "reversed": False, "delay": 3, "speed": 7},
                    {"direction": "L", "reversed": False, "delay": 4, "speed": 6},
                    {"direction": "?", "reversed": False, "delay": 5, "speed": 5}
                ]
            },
            {
                "attackDelay": 345,
                "clockwiseShift": False,
                "arrows": [
                    {"direction": "?", "reversed": True, "delay": 6, "speed": 4},
                    {"direction": "L", "reversed": True, "delay": 7, "speed": 3},
                    {"direction": "R", "reversed": True, "delay": 8, "speed": 2},
                    {"direction": "D", "reversed": True, "delay": 9, "speed": 1},
                    {"direction": "U", "reversed": True, "delay": 10, "speed": 1}
                ]
            }
        ],
        # Add from database
        "title": "From Flask", "description": "What is the max # of characters?", "difficulty": "Hard",
        "isPublic": True
    }
    
    send = {}
    if level_id is not None:
        send = level_json
    else:
        send = new_level
    
    return render_template("level_creator/level_creator.html", level_json = send)


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


if __name__ == "__main__":
    app.run()
