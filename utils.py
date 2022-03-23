import os
from functools import wraps

from flask import session, redirect, url_for


def get_project_base_path():
    return os.path.dirname(os.path.realpath(__file__))


def requires_auth(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        if "temp" in session and "profile" not in session:
            return redirect(url_for("auth.get_set_username_screen"))
        if "profile" not in session:
            # Redirect to Login page here
            return redirect(url_for("auth.login_user"))
        return f(*args, **kwargs)
    
    return decorated
