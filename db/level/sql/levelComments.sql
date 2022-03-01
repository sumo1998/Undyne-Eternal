select 
    u.user_id, u.user_name,
    c.comment_id,c.comment_rating, c.comment_desc
from 
    levels as l, comments as c, usr as u
where
    c.level_id = l.level_id and
    l.level_id = '{{level_id}}' and
    c.user_id = u.user_id
order by 
    c.comment_rating desc;
