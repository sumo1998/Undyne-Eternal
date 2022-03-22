# Have changed the structure from what we discussed
# Removed the structure of "client" module and just added a common templates folder
# Made it like this to make the structure conform to what flask expects. Just a little less manual path specification
# But if the project grows bigger, we can change the structure to be more modular

import json

from flask import Flask, render_template, redirect, url_for, request

from api.auth import auth_router
from factory import object_factory

app = Flask(__name__)
app.secret_key = '21344'
object_factory.get_auth_object(app)

app.register_blueprint(auth_router.auth_blueprint)


@app.route("/")
def home_page():
    return redirect(url_for("feed"))


@app.route("/home-feed")
def feed():
    return "<h1>This is the homepage for the app</h1><a href='game'>Click here</a>"


@app.route("/game")
def game():
    level_id = request.args.get("id")
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


if __name__ == '__main__':
    app.run()
