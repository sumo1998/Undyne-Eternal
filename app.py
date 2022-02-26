# Have changed the structure from what we discussed
# Removed the structure of "client" module and just added a common templates folder
# Made it like this to make the structure conform to what flask expects. Just a little less manual path specification
# But if the project grows bigger, we can change the structure to be more modular

from flask import Flask
from factory import object_factory

app = Flask(__name__)
app.secret_key = '21344'
object_factory._create_auth_object(app)

from api.auth import auth_router

app.register_blueprint(auth_router.auth_blueprint)


@app.route("/")
def home_page():
    return "<h1>This is the homepage for the app</h1>"


if __name__ == '__main__':
    app.run()
