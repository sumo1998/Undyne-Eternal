select *
from levels
where user_id = '{{user_id}}'
order by level_rating desc;