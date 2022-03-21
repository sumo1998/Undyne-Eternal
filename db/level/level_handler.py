
from flask import render_template_string
from db import database_handler

from db.level.level_pydantic import AddComment,UpdateComment, DeleteComment, UpdateLevel, AddLevel, DeleteLevel


def get_level_info(id):
    query = ""
    with open('./db/level/sql/levelInfo.sql') as f:
        query = f.read()
        
        with database_handler.get_db_cursor() as cur:
            cur.execute(query, id)
            res = cur.fetchall()
            return res



def get_level_comments(id):
    query = ""
    with open('./db/level/sql/levelComments.sql') as f:
        query = f.read()
        
        with database_handler.get_db_cursor() as cur:
            cur.execute(query, id)
            res = cur.fetchall()
            return res


def add_level_comment(data):
    dt = AddComment(**data)
    d = data
    uid = d['userId']
    body = d['commentBody']
    rating = d['commentRating']
    lid = d['levelId']
    query = ""
    with open('./db/level/sql/addLevelComment.sql') as f:
        query = f.read()
        
        with database_handler.get_db_cursor(True) as cur:
            cur.execute(query, (uid, lid, rating, body))
            print("Executed query")
    
    with open('./db/level/sql/updateLevelRating.sql') as f:
        query = f.read()
        
        with database_handler.get_db_cursor(True) as cur:
            cur.execute(query, (lid,lid))
            print("Executed query")



def update_level_comment(data):
    dt = UpdateComment(**data)
    body = data['commentBody']
    rating = data['commentRating']
    comment_id = data['commentId']
    print("DICT: "+str(data))
    query = ""
    with open('./db/level/sql/updateLevelComment.sql') as f:
        query = f.read()
        
        with database_handler.get_db_cursor(True) as cur:
            cur.execute(query, (body, rating, comment_id))
            print("Executed query")


def delete_comment(data):
    dt = DeleteComment(**data)
    comment_id = data['commentId']
    query = ""
    with open('./db/level/sql/deleteComment.sql') as f:
        query = f.read()
        
        with database_handler.get_db_cursor(True) as cur:
            cur.execute(query, [comment_id])
            print("Executed query")


def update_level(data):
    dt = UpdateLevel(**data)
    d = data
    lid = d['levelId']
    level_name = d['levelName']
    level_rating = d['levelRating']
    level_summary = d['levelSummary']
    level_description = d['levelDescription']
    level_diff = d['levelDiff']
    
    query = ""
    with open('./db/level/sql/updateLevel.sql') as f:
        query = f.read()
        
        with database_handler.get_db_cursor(True) as cur:
            cur.execute(query, (level_name, level_rating, level_summary, level_description, level_diff, lid))
            print("Executed query")


def delete_level(data):
    dt = DeleteLevel(**data)
    d = data
    lid = d['levelId']
    query = ""
    with open('./db/level/sql/deleteLevel.sql') as f:
        query = f.read()
        
        with database_handler.get_db_cursor(True) as cur:
            cur.execute(query, [lid])
            print("Executed query")


def add_level(data):
    dt = AddLevel(**data)
    d = data
    uid = d['userId']
    level_name = d['levelName']
    level_rating = d['levelRating']
    level_summary = d['levelSummary']
    level_description = d['levelDescription']
    level_diff = d['levelDiff']
    
    query = ""
    with open('./db/level/sql/addLevel.sql') as f:
        query = f.read()
        
        with database_handler.get_db_cursor(True) as cur:
            cur.execute(query, (level_name, level_rating, level_diff, level_summary, level_description, uid))
            print("Executed query")
