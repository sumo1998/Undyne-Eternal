from flask import Blueprint, render_template

import utils

project_base_path = utils.get_project_base_path()

auth_blueprint = Blueprint('auth', __name__, url_prefix="/auth", template_folder=f"{project_base_path}/templates/auth",
                           static_folder=f"templates/auth/static", root_path=project_base_path)


@auth_blueprint.route('/register')
def register_user():
    return render_template('auth_template.html')
