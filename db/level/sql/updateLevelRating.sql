update 
    levels 
set 
    level_rating=(select round( cast(avg(comment_rating) as numeric) ,2)  from comments where level_id=%s) 
where level_id=%s;