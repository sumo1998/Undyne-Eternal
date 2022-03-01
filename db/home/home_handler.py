from db import database_handler

"""
    Returns levels to be displayed on HomeFeed
"""
def getHomeFeed():
    with database_handler.get_db_cursor(True) as cur:
        #Get query
        query = ""
        with open("./db/home/sql/homeFeed.sql") as f:
            query = f.read()
        cur.execute(query)
        res = cur.fetchall()
        return res

