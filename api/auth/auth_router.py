from flask import Blueprint, render_template, redirect, url_for, session, jsonify, request

import utils
from db.auth import auth_handler, auth_models
from factory import object_factory

project_base_path = utils.get_project_base_path()

auth_blueprint = Blueprint('auth', __name__, template_folder=f"{project_base_path}/templates/auth",
                           static_folder=f"templates/auth/static", root_path=project_base_path)


@auth_blueprint.route('/register')
def register_user():
    return render_template('auth_template.html')


@auth_blueprint.route('/user-name', methods=['POST'])
def set_username():
    data = request.form
    session['temp']['nickname'] = data['userName']
    user_data = auth_models.UserModel(**session.pop('temp'))
    auth_handler.write_userdata_to_db(user_data)
    # Only after user info is set, we allow user to continue
    session['profile'] = user_data.dict()
    return jsonify(session['jwt_payload'])


@auth_blueprint.route('/user-name', methods=['GET'])
def get_set_username_screen():
    return render_template('set_username_template.html')


@auth_blueprint.route('/callback')
def oauth_callback():
    if object_factory.get_auth_object().handle_callbacks():
        return redirect(url_for('auth.user_data'))
    return redirect(url_for('auth.get_set_username_screen'))


@auth_blueprint.route('/login')
def login_user():
    return object_factory.get_auth_object().handle_login(url_for('auth.oauth_callback', _external=True))


@auth_blueprint.route('/logout')
def logout_user():
    # Redirect user to home page
    return redirect(object_factory.get_auth_object().handle_logout(url_for('home_page', _external=True)))
