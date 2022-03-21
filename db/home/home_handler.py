from db import database_handler

from typing import Optional, List, Literal
from pydantic import BaseModel, validator, Field


class Filter(BaseModel):
    difficulty: List[str]
    rating: List[int]
    timespan: str
    
    @validator('difficulty')
    def check_difficulty(cls, value):
        # Len cant be greater than 3
        if len(value) > 3:
            raise ValueError('Length of value list cannot be greater than 3')
        
        # Values - easy,medium,hard - Occurs once
        value_set = set()
        allowed_values = ["easy", "medium", "hard"]
        for v in value:
            if v not in allowed_values:
                raise ValueError("Value can only be 'easy' , 'medium'  or 'hard' ")
            if v in value_set:
                raise ValueError(v + " occurs more than once")
            value_set.add(v)
    
    @validator('rating')
    def check_rating(cls, value):
        # Len ==2
        if len(value) != 2:
            raise ValueError("Rating should be a list of length 2")
        
        # Check values
        for v in value:
            if v < 0 or v > 5:
                raise ValueError("Rating value should be between 0-5")
        
        # Check rating interval
        if value[0] > value[1]:
            raise ValueError("Rating should be an interval")
    
    @validator('timespan')
    def check_timespan(cls, value):
        allowed_values = ["day", "week", "month", "year", "alltime"]
        if value not in allowed_values:
            raise ValueError('Value for timespan should be day,week,month,year or alltime')


class Parameters(BaseModel):
    filters: Filter
    sorting: str
    search: str
    
    @validator('sorting')
    def check_sorting_value(cls, value):
        if value != "time" and value != "rating":
            raise ValueError("sorting should be 'time' or 'rating' ")
    
    @validator('search')
    def check_search_value(cls, value):
        pass


def build_query(params):
    query = """
    select
            l.level_id,l.level_name,l.level_rating,l.level_summary,l.level_description,l.level_diff,u.user_id,u.user_name,u.user_avatar
    from
        levels as l,usr as u
    where
        l.user_id = u.user_id and l.level_published = true """
    
    # Add difficulty params
    difficulty = params['filters']['difficulty']
    if len(difficulty) != 0:
        query = query + " and ("
        flag = False
        for diff in difficulty:
            if flag:
                query = query + "or l.level_diff = '" + str(diff) + "'"
            else:
                query = query + "l.level_diff = '" + str(diff) + "'"
            flag = True
        query = query + " ) "
    
    # Add rating params
    rating = params['filters']['rating']
    query = query + " and ( "
    query = query + " l.level_rating >= '" + str(rating[0]) + "'"
    query = query + " and l.level_rating <= '" + str(rating[1]) + "'"
    query = query + " ) "
    
    # Add timespan
    timespan = params['filters']['timespan']
    if timespan != "alltime":
        query = query + " and "
        if timespan == "day":
            query = query + "l.level_created_timestamp >= CURRENT_TIMESTAMP - INTERVAL '1 days'"
        elif timespan == "week":
            query = query + "l.level_created_timestamp >= CURRENT_TIMESTAMP - INTERVAL '7 days'"
        elif timespan == "month":
            query = query + "l.level_created_timestamp >= CURRENT_TIMESTAMP - INTERVAL '30 days'"
        else:
            query = query + "l.level_created_timestamp >= CURRENT_TIMESTAMP - INTERVAL '365 days'"
    
    # Add search
    search = params['search']
    if search != "":
        query = query + " and level_ts @@ to_tsquery('english','" + search + ":*')"
    
    # Add sorting
    sorting = params['sorting']
    query = query + " order by "
    if sorting == "time":
        query = query + "l.level_created_timestamp desc;"
    else:
        query = query + "l.level_rating desc;"
    
    return query


def get_home_feed(data):
    if data is None:
        with database_handler.get_db_cursor(True) as cur:
            query = ""
            with open("./db/home/sql/homeFeed.sql") as f:
                query = f.read()
            cur.execute(query)
            res = cur.fetchall()
            return res
    else:
        # Apply filters and sort
        d = Parameters(**data)
        with database_handler.get_db_cursor(True) as cur:
            query = build_query(data)
            cur.execute(query)
            res = cur.fetchall()
            return res

