import json

from flask import Blueprint, render_template, redirect, url_for, session, jsonify, request

import utils
from db.auth import auth_handler, auth_models
from factory import object_factory

project_base_path = utils.get_project_base_path()

auth_blueprint = Blueprint('auth', __name__, template_folder=f"{project_base_path}/templates/auth",
                           static_folder=f"templates/auth/static", root_path=project_base_path)


@auth_blueprint.route('/user-name', methods=['POST'])
def set_username():
    data = request.form
    session['temp']['nickname'] = data['userName']
    user_data = auth_models.UserModel(**session.pop('temp'))
    auth_handler.write_userdata_to_db(user_data)
    # Only after user info is set, we allow user to continue
    session['profile'] = user_data.dict()
    return jsonify(session['profile'])


@auth_blueprint.route('/user-name', methods=['GET'])
def get_set_username_screen():
    # return render_template('set_username_template.html')
    return "<h1>This page is to get user name data if not exists</h1><br><br>\n" + json.dumps(session['temp'], indent=4)


@auth_blueprint.route('/user')
def user_info():
    return jsonify(session['profile'])


@auth_blueprint.route('/callback')
def oauth_callback():
    if object_factory.get_auth_object().handle_callbacks():
        return redirect(url_for('auth.user_info'))
    return redirect(url_for('auth.get_set_username_screen'))


@auth_blueprint.route('/login')
def login_user():
    if 'profile' in session:
        return redirect(url_for('home_page'))
    elif 'temp' in session:
        return redirect(url_for('get_set_username_screen'))
    return object_factory.get_auth_object().handle_login(url_for('auth.oauth_callback', _external=True))


@auth_blueprint.route('/logout')
def logout_user():
    # Redirect user to home page
    return redirect(object_factory.get_auth_object().handle_logout(url_for('home_page', _external=True)))
