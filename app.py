# Have changed the structure from what we discussed
# Removed the structure of "client" module and just added a common templates folder
# Made it like this to make the structure conform to what flask expects. Just a little less manual path specification
# But if the project grows bigger, we can change the structure to be more modular

from flask import Flask, render_template
from factory import object_factory

app = Flask(__name__)
app.secret_key='21344'
app.config['TEMPLATES_AUTO_RELOAD'] = True
object_factory.get_auth_object(app)
from api.auth import auth_router

app.register_blueprint(auth_router.auth_blueprint)


@app.route("/")
def home_page():
    return render_template("index.html")


if __name__ == '__main__':
    app.run()
