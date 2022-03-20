from flask import Blueprint, render_template, redirect, url_for, session, jsonify

import utils
from factory import object_factory

project_base_path = utils.get_project_base_path()

auth_blueprint = Blueprint(
    'auth', __name__, template_folder = f"{project_base_path}/templates/auth",
    static_folder = f"templates/auth/static", root_path = project_base_path
)


@auth_blueprint.route('/register')
def register_user():
    return render_template('auth/auth_template.html')


@auth_blueprint.route('/user')
def user_data():
    return jsonify(session['jwt_payload'])


@auth_blueprint.route('/callback')
def oauth_callback():
    object_factory.get_auth_object().handle_callbacks()
    return redirect(url_for('auth.user_data'))


@auth_blueprint.route('/login')
def login_user():
    return object_factory.get_auth_object().handle_login(url_for('auth.oauth_callback', _external = True))
