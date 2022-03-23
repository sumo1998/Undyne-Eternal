UPDATE levels
SET level_name=%(level_name)s,
    level_rating=%(level_rating)s,
    level_summary=%(level_summary)s,
    level_description=%(level_description)s,
    level_diff=%(level_diff)s,
    level_published= %s
WHERE level_id = %s;