# Have changed the structure from what we discussed
# Removed the structure of "client" module and just added a common templates folder
# Made it like this to make the structure conform to what flask expects. Just a little less manual path specification
# But if the project grows bigger, we can change the structure to be more modular

from flask import Flask, render_template, redirect, url_for

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
    return render_template("game/game.html")


if __name__ == '__main__':
    app.run()
