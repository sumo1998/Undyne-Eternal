from flask import render_template_string
from db import database_handler

"""
    Returns info for user with user_id = id
    Parameters:
        id - user id
"""
def getUserInfo(id):
    query = ""
    with open("./db/user/sql/user_info.sql") as f:
        query = f.read()

        with database_handler.get_db_cursor() as cur:
            cur.execute(query,id)
            res = cur.fetchall()
            return res

"""
    Returns info on all levels created by the user with user_id = id
    Parameters:
        id - user id
"""
def getUserLevels(id):
    query = ""
    with open("./db/user/sql/user_levels.sql") as f:
        query = f.read()

        with database_handler.get_db_cursor() as cur:
            cur.execute(query,id)
            res = cur.fetchall()
            return res