# Have changed the structure from what we discussed
# Removed the structure of "client" module and just added a common templates folder
# Made it like this to make the structure conform to what flask expects. Just a little less manual path specification
# But if the project grows bigger, we can change the structure to be more modular

from flask import Flask
from api.auth import auth_router

app = Flask(__name__)
app.register_blueprint(auth_router.auth_blueprint)

if __name__ == '__main__':
    app.run()
