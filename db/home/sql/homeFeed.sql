select 
    l.level_id,l.level_name,l.level_rating,l.level_summary,l.level_description,l.level_diff,u.user_id,u.user_name,u.user_avatar
from 
    levels as l,usr as u
where 
    l.user_id = u.user_id and l.level_published = true
order by
    l.level_created_timestamp desc;