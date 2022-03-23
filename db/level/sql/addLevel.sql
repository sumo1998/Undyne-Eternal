INSERT INTO levels(level_name, level_diff, level_summary, level_description, user_id, level_published)
VALUES (%(level_name)s, %(level_diff)s, %(level_summary)s, %(level_description)s, %(user_id)s, %(level_published)s)
RETURNING level_id;