# Have changed the structure from what we discussed
# Removed the structure of "client" module and just added a common templates folder
# Made it like this to make the structure conform to what flask expects. Just a little less manual path specification
# But if the project grows bigger, we can change the structure to be more modular
import os

from dotenv import load_dotenv, find_dotenv
from flask import Flask

from api.auth import auth_router
from factory import object_factory

load_dotenv(find_dotenv())

app = Flask(__name__)

app.secret_key = os.getenv('APP_SECRET')
object_factory._create_auth_object(app)

app.register_blueprint(auth_router.auth_blueprint)


@app.route("/")
def home_page():
    return "<h1>This is the homepage for the app</h1>"


if __name__ == '__main__':
    app.run()
