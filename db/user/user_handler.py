import os

from db import database_handler
from db.user.user_pydantic import UpdateUser

BASE_PATH = f"{os.path.dirname(os.path.realpath(__file__))}/sql"


def get_user_info(id):
    with open(f"{BASE_PATH}/user_info.sql") as f:
        query = f.read()
        
        with database_handler.get_db_cursor() as cur:
            cur.execute(query, (id,))
            res = cur.fetchall()
            return res


def get_user_levels(id):
    with open(f"{BASE_PATH}/userLevels.sql") as f:
        query = f.read()
        
        with database_handler.get_db_cursor() as cur:
            cur.execute(query, (id, ))
            res = cur.fetchall()
            return res


def update_user(data):
    dt = UpdateUser(**data)
    d = data
    uid = d['userId']
    user_name = d['userName']
    user_avatar = d['userAvatar']
    
    with open('./db/user/sql/updateUser.sql') as f:
        query = f.read()
        
        with database_handler.get_db_cursor(True) as cur:
            cur.execute(query, (user_name, user_avatar, uid))
            print("Executed query")
