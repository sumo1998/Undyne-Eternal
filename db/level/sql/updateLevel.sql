UPDATE levels
SET level_name=%s,
    level_rating=%s,
    level_summary=%s,
    level_description=%s,
    level_diff=%s,
    level_published=%s
WHERE level_id =% s;