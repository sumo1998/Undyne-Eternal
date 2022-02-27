from flask import render_template_string
from db import database_handler

def getLevelInfo(id):
    query = ""
    with open('./db/level/sql/levelInfo.sql') as f:
        query = f.read()
        query = render_template_string(query,level_id=id)

        with database_handler.get_db_cursor() as cur:
            cur.execute(query)
            res = cur.fetchall()
            return res

def getLevelComments(id):
    query = ""
    with open('./db/level/sql/levelComments.sql') as f:
        query = f.read()
        query = render_template_string(query,level_id=id)

        with database_handler.get_db_cursor() as cur:
            cur.execute(query)
            res = cur.fetchall()
            return res