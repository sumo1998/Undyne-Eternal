UPDATE comments
SET comment_desc='%(comment_desc)s',
    comment_rating=%(comment_rating)s
WHERE comment_id =%(comment_id)s;