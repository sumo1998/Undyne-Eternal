SELECT l.level_id,
       l.level_name,
       l.level_rating,
       l.level_summary,
       l.level_description,
       l.level_diff,
       l.level_published,
       u.user_id,
       u.user_name,
       u.user_avatar
FROM levels AS l,
     usr AS u
WHERE l.user_id = u.user_id
  AND l.level_id = % s
ORDER BY l.level_rating DESC;