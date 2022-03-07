from flask import render_template_string

from db import database_handler


def getUserInfo(id):
    query = ""
    with open("./db/user/sql/user_info.sql") as f:
        query = f.read()
        query = render_template_string(query, user_id = id)
        
        with database_handler.get_db_cursor() as cur:
            cur.execute(query)
            res = cur.fetchall()
            return res


def getUserLevels(id):
    query = ""
    with open("./db/user/sql/user_levels.sql") as f:
        query = f.read()
        query = render_template_string(query, user_id = id)
        
        with database_handler.get_db_cursor() as cur:
            cur.execute(query)
            res = cur.fetchall()
            return res
