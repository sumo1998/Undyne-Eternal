INSERT INTO levels(level_name, level_rating, level_diff, level_summary, level_description, user_id, level_published,
                   level_created_timestamp)
VALUES (% S, % S, % S, % S, % S, % S, % S, CURRENT_TIMESTAMP);