import os
from typing import Optional

from dotenv import load_dotenv, find_dotenv
from werkzeug.local import LocalProxy

import utils

from flask import Flask
from flask import session
from authlib.integrations.flask_client import OAuth

load_dotenv(find_dotenv(utils.get_project_base_path()))

oauth = OAuth()


class Auth:
    def __init__(self, app: Flask):
        oauth.init_app(app)
        self.__registered_app = None

    def _get_app(self) -> Optional[LocalProxy]:
        if self.__registered_app is None:
            self.__registered_app = oauth.register('auth0',
                                                   client_id=os.getenv('CLIENT_ID'),
                                                   client_secret=os.getenv('CLIENT_SECRET'),
                                                   api_base_url=f"https://{os.getenv('DOMAIN')}",
                                                   access_token_url=f"https://{os.getenv('DOMAIN')}/oauth/token",
                                                   authorize_url=f"https://{os.getenv('DOMAIN')}/authorize",
                                                   client_kwargs={
                                                       'scope': 'openid profile email',
                                                   },
                                                   )
        return self.__registered_app

    def handle_callbacks(self):
        auth0 = self._get_app()
        auth0.authorize_access_token()
        resp = auth0.get('userinfo')
        userinfo = resp.json()

        # Store the user information in flask session.
        session['jwt_payload'] = userinfo
        session['profile'] = {
            'user_id': userinfo['sub'],
            'name': userinfo['name'],
            'picture': userinfo['picture']
        }

    def handle_login(self, redirect_uri: str):
        return self._get_app().authorize_redirect(redirect_uri=redirect_uri)
