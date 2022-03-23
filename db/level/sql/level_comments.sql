SELECT u.user_id,
       u.user_name,
       c.comment_id,
       c.comment_rating,
       c.comment_desc,
       u.user_avatar
FROM levels AS l,
     comments AS c,
     user_info AS u
WHERE c.level_id = l.level_id
  AND l.level_id = %s
  AND c.user_id = u.user_id
ORDER BY c.comment_rating DESC;
