from db import database_handler

def getHomeFeed():
    with database_handler.get_db_cursor(True) as cur:
        #Get query
        query = ""
        with open("./db/home/sql/homeFeed.sql") as f:
            query = f.read()
        cur.execute(query)
        res = cur.fetchall()
        return res

"""
select l.level_id,l.level_name,l.level_rating,l.level_summary,l.level_description,l.level_diff,u.user_id,u.user_name,u.user_avatar
from levels as l,usr as u
where l.user_id = u.user_id order by l.level_rating desc;
"""