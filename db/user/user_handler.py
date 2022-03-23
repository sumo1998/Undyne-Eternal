import os

from flask import session

from db import database_handler

BASE_PATH = f"{os.path.dirname(os.path.realpath(__file__))}/sql"


def get_user_info(id):
    with open(f"{BASE_PATH}/user_info.sql") as f:
        query = f.read()
        
        with database_handler.get_db_cursor() as cur:
            cur.execute(query, (id,))
            res = cur.fetchall()
            return res


def get_user_levels(id):
    with open(f"{BASE_PATH}/user_levels.sql") as f:
        query = f.read()
        
        with database_handler.get_db_cursor() as cur:
            cur.execute(query, (id,))
            res = cur.fetchall()
            return res


def update_user_avatar(user_avatar_url):
    assert "profile" in session
    database_handler.execute_query_from_files(
        f"{BASE_PATH}/update_user.sql", dict(user_avatar = user_avatar_url, user_id = session["profile"]["user_id"])
    )
