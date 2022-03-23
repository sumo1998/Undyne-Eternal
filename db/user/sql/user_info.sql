SELECT u.user_id, u.user_name, u.user_email, u.user_avatar, AVG(l.level_rating)
FROM user_info u, levels l
WHERE u.user_name = %s
  AND u.user_id = l.user_id
GROUP BY u.user_id, u.user_name, u.user_email, u.user_avatar;