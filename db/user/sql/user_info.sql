select u.user_id, u.user_name, u.user_email, u.user_avatar, avg(l.level_rating)
from user_info u, levels l
where u.user_name = %s
GROUP BY
u.user_id, u.user_name, u.user_email, u.user_avatar;