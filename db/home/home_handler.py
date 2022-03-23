import os

from db import database_handler
from db.home.home_models import SearchData

BASE_PATH = f"{os.path.dirname(os.path.realpath(__file__))}/sql"


def build_query(search_data: SearchData):
    query = f"SELECT l.level_id,l.level_name,l.level_rating,l.level_summary," \
            f"l.level_description,l.level_diff,u.user_id,u.user_name,u.user_avatar " \
            f"FROM levels AS l,user_info AS u " \
            f"WHERE l.user_id = u.user_id AND l.level_published = TRUE " \
            f"AND (l.level_rating >= %(low_rating)s AND l.level_rating <= %(high_rating)s) "
    
    # Add difficulty params
    if search_data.filters.difficulty:
        sq = "'"
        query = query + f" and ( l.level_diff = {' or l.level_diff = '.join(sq + x + sq for x in search_data.filters.difficulty)} )"
    
    # Add timespan
    if search_data.filters.timespan:
        query = query + f" and l.level_created_timestamp >= CURRENT_TIMESTAMP - INTERVAL '{search_data.filters.timespan} days'"
    
    # Add search
    if search_data.search:
        searchQuery = ""
        for word in search_data.search.split(" "):
            word.replace(" ", "")
            if word == "":
                continue
            else:
                if searchQuery == "":
                    searchQuery = " and level_ts @@ to_tsquery('english','" + word + ":*"
                else:
                    searchQuery = searchQuery + " & " + word + ":* "
        
        if searchQuery != "":
            searchQuery = searchQuery + " ')"
            # query = query + f" and level_ts @@ plainto_tsquery('english',%(search)s)"
            query = query + searchQuery
    
    # Add sorting
    query = query + " order by "
    if search_data.sorting == "time":
        query = query + "l.level_created_timestamp desc;"
    else:
        query = query + "l.level_rating desc;"
    
    return query


def get_homefeed():
    return database_handler.execute_query_from_files(f"{BASE_PATH}/homeFeed.sql", [], get_result = True)


def get_homefeed_with_filters(data):
    # Apply filters and sort
    search_data = SearchData(**data)
    with database_handler.get_db_cursor(True) as cur:
        query = build_query(search_data)
        cur.execute(
            query, dict(
                search = search_data.search + ':*', low_rating = search_data.filters.rating[0],
                high_rating = search_data.filters.rating[1]
            )
        )
        res = cur.fetchall()
        return res
