insert into levels(level_name,level_rating,level_diff,level_summary,level_description, user_id, level_created_timestamp)
values 
    (%s,%s,%s,%s,%s,%s,CURRENT_TIMESTAMP);