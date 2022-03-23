SELECT u.user_id, u.user_name, u.user_email, u.user_avatar, COALESCE(AVG(l.level_rating) FILTER ( WHERE l.level_rating != 0 ), 0)
FROM user_info AS u
     LEFT JOIN levels l ON u.user_id = l.user_id
WHERE u.user_name = %s
GROUP BY u.user_id, u.user_name, u.user_email, u.user_avatar
