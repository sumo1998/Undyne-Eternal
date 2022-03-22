SELECT l.level_id,
       l.level_name,
       l.level_rating,
       l.level_summary,
       l.level_description,
       l.level_diff,
       u.user_id,
       u.user_name,
       u.user_avatar
FROM levels AS l,
     user_info AS u
WHERE l.user_id = u.user_id
  AND l.level_published = TRUE
ORDER BY l.level_created_timestamp DESC;