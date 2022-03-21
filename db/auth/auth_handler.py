import os
from typing import Optional

from flask import render_template_string

from db import database_handler
from db.auth import auth_models

BASE_PATH = f"{os.path.dirname(os.path.realpath(__file__))}/sql"


def check_if_user_in_db(user_id, user_email = None) -> Optional[auth_models.UserModel]:
    with open(f"{BASE_PATH}/getUserData.sql") as file:
        query = render_template_string(file.read(), check_email = bool(user_email))
        with database_handler.get_db_cursor(True) as cur:
            cur.execute(query, dict(user_id = user_id, user_email = user_email))
            res = cur.fetchall()
            # If we are getting more than one match for this, something has gone wrong
            assert len(res) <= 1
            if res:
                user_id, user_name, user_email, user_avatar, creation_time = res[0]
                return auth_models.UserModel(
                    sub = user_id, nickname = user_name, email = user_email, picture = user_avatar,
                    creation_date = creation_time
                )
            else:
                return None


def check_if_username_is_unique(user_name) -> bool:
    with open(f"{BASE_PATH}/checkIfUsernameUnique.sql") as file:
        query = file.read()
        with database_handler.get_db_cursor(True) as cur:
            cur.execute(query, (user_name,))
            res = cur.fetchall()
            return bool(res)


def write_userdata_to_db(user_data: auth_models.UserModel):
    with open(f"{BASE_PATH}/insertUserData.sql") as file:
        query = file.read()
        with database_handler.get_db_cursor(True) as cur:
            cur.execute(query, user_data.dict())
