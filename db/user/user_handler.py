from db import database_handler

"""
    Returns info for user with user_id = id
    Parameters:
        id - user id
"""


def get_user_info(id):
    query = ""
    with open("./db/user/sql/user_info.sql") as f:
        query = f.read()
        
        with database_handler.get_db_cursor() as cur:
            cur.execute(query, id)
            res = cur.fetchall()
            return res


"""
    Returns info on all levels created by the user with user_id = id
    Parameters:
        id - user id
"""


def get_user_levels(id):
    query = ""
    with open("./db/user/sql/user_levels.sql") as f:
        query = f.read()
        
        with database_handler.get_db_cursor() as cur:
            cur.execute(query, id)
            res = cur.fetchall()
            return res


def update_user(data):
    uid = ""
    user_name = ""
    user_avatar = ""
    
    for key in data:
        if key == "userId":
            uid = int(data[key])
        elif key == "userName":
            user_name = data[key]
        elif key == "userAvatar":
            user_avatar = data[key]
    
    query = ""
    with open('./db/user/sql/updateUser.sql') as f:
        query = f.read()
        
        with database_handler.get_db_cursor(True) as cur:
            cur.execute(query, (user_name, user_avatar, uid))
            print("Executed query")
