from flask import Blueprint, redirect, url_for, session, request, render_template

import utils
from db.auth import auth_handler, auth_models
from factory import object_factory

project_base_path = utils.get_project_base_path()

auth_blueprint = Blueprint(
    "auth", __name__
)


@auth_blueprint.route('/user-name', methods = ['POST'])
def set_username():
    data = request.form
    username = data["username"]
    if username is None:
        return redirect(url_for("auth.get_set_username_screen"))
    username = username[:20]
    
    if auth_handler.check_if_username_exists(username):
        session["attempted_username"] = username
        return redirect(url_for("auth.get_set_username_screen"))
    
    session.pop("attempted_username", None)
    session["temp"]["nickname"] = username
    user_data = auth_models.UserModel(**session.pop("temp"))
    auth_handler.write_userdata_to_db(user_data)
    # Only after user info is set, we allow user to continue
    session["profile"] = user_data.dict()
    return redirect(url_for("feed"))


@auth_blueprint.route('/user-name', methods = ['GET'])
def get_set_username_screen():
    attempted_username = session.get("attempted_username")
    if attempted_username is None:
        attempted_username = ""
    
    if "temp" not in session:
        return redirect(url_for("auth.login_user"))
    return render_template("auth/set_username.html", attempted_username = attempted_username)


@auth_blueprint.route("/callback")
def oauth_callback():
    error = request.args.get("error")
    if error is not None and error == "access_denied":
        return redirect(url_for("auth.logout_user"))
    elif object_factory.get_auth_object().handle_callbacks():
        return redirect(url_for("home_page"))
    return redirect(url_for("auth.get_set_username_screen"))


@auth_blueprint.route("/login")
def login_user():
    if "profile" in session:
        return redirect(url_for("home_page"))
    elif "temp" in session:
        return redirect(url_for("feed"))
    return object_factory.get_auth_object().handle_login(url_for("auth.oauth_callback", _external = True))


@auth_blueprint.route('/logout')
def logout_user():
    # Redirect user to home page
    return redirect(object_factory.get_auth_object().handle_logout(url_for('home_page', _external = True)))
