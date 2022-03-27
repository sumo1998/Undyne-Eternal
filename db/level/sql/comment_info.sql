SELECT comment_id, comment_rating, comment_desc, user_id, level_id
FROM comments
WHERE comment_id = %s;
