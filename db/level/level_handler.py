from flask import render_template_string
from db import database_handler


"""
    Returns information for level with level_id = id
    Parameters:
        id - Level id
"""


def get_level_info(id):
    query = ""
    with open('./db/level/sql/levelInfo.sql') as f:
        query = f.read()
        
        with database_handler.get_db_cursor() as cur:
            cur.execute(query, id)
            res = cur.fetchall()
            return res


"""
    Returns comments information for level with level_id = id
    Parameters:
        id - level id
"""


def get_level_comments(id):
    query = ""
    with open('./db/level/sql/levelComments.sql') as f:
        query = f.read()
        
        with database_handler.get_db_cursor() as cur:
            cur.execute(query, id)
            res = cur.fetchall()
            return res


def add_level_comment(data):
    
    uid = ""
    body = ""
    rating = ""
    lid = ""
    for key in data:
        if key == "userId":
            uid = int(data[key])
        elif key == "commentBody":
            body = data[key]
        elif key == "levelId":
            lid = int(data[key])
        elif key == "commentRating":
            rating = float(data[key])
    
    query = ""
    with open('./db/level/sql/addLevelComment.sql') as f:
        query = f.read()
        
        with database_handler.get_db_cursor(True) as cur:
            cur.execute(query, (uid, lid, rating, body))
            print("Executed query")


def update_level_comment(data):
    body = ""
    rating = ""
    comment_id = ""
    for key in data:
        if key == "commentBody":
            body = data[key]
        elif key == "commentRating":
            rating = float(data[key])
        elif key == "commentId":
            comment_id = int(data[key])
    
    query = ""
    with open('./db/level/sql/updateLevelComment.sql') as f:
        query = f.read()
        
        with database_handler.get_db_cursor(True) as cur:
            cur.execute(query, (body, rating, comment_id))
            print("Executed query")


def delete_comment(data):
    comment_id = int(data["commentId"])
    query = ""
    with open('./db/level/sql/deleteComment.sql') as f:
        query = f.read()
        
        with database_handler.get_db_cursor(True) as cur:
            cur.execute(query, [comment_id])
            print("Executed query")


def update_level(data):
    lid = ""
    level_name = ""
    level_rating = ""
    level_summary = ""
    level_description = ""
    level_diff = ""
    
    for key in data:
        if key == "levelName":
            level_name = data[key]
        elif key == "levelId":
            lid = int(data[key])
        elif key == "levelRating":
            level_rating = float(data[key])
        elif key == "levelSummary":
            level_summary = data[key]
        elif key == "levelDescription":
            level_description = data[key]
        elif key == "levelDiff":
            level_diff = data[key]
    
    query = ""
    with open('./db/level/sql/updateLevel.sql') as f:
        query = f.read()
        
        with database_handler.get_db_cursor(True) as cur:
            cur.execute(query, (level_name, level_rating, level_summary, level_description, level_diff, lid))
            print("Executed query")


def delete_level(data):
    lid = data['levelId']
    query = ""
    with open('./db/level/sql/deleteLevel.sql') as f:
        query = f.read()
        
        with database_handler.get_db_cursor(True) as cur:
            cur.execute(query, [lid])
            print("Executed query")


def add_level(data):
    uid = ""
    level_name = ""
    level_rating = ""
    level_summary = ""
    level_description = ""
    level_diff = ""
    
    for key in data:
        if key == "userId":
            uid = int(data[key])
        elif key == "levelName":
            level_name = data[key]
        elif key == "levelRating":
            level_rating = float(data[key])
        elif key == "levelSummary":
            level_summary = data[key]
        elif key == "levelDescription":
            level_description = data[key]
        elif key == "levelDiff":
            level_diff = data[key]
    
    query = ""
    with open('./db/level/sql/addLevel.sql') as f:
        query = f.read()
        
        with database_handler.get_db_cursor(True) as cur:
            cur.execute(query, (level_name, level_rating, level_diff, level_summary, level_description, uid))
            print("Executed query")
