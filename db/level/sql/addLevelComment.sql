insert into comments(user_id,level_id,comment_rating,comment_desc,comment_timestamp)
values
    (%s,%s,%s,%s,CURRENT_TIMESTAMP);