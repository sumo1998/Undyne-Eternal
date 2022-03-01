from flask import render_template_string
from db import database_handler

"""
    Returns information for level with level_id = id
    Parameters: 
        id - Level id
"""
def getLevelInfo(id):
    query = ""
    with open('./db/level/sql/levelInfo.sql') as f:
        query = f.read()

        with database_handler.get_db_cursor() as cur:
            cur.execute(query,id)
            res = cur.fetchall()
            return res

"""
    Returns comments information for level with level_id = id 
    Parameters:
        id - level id
"""
def getLevelComments(id):
    query = ""
    with open('./db/level/sql/levelComments.sql') as f:
        query = f.read()

        with database_handler.get_db_cursor() as cur:
            cur.execute(query,id)
            res = cur.fetchall()
            return res