INSERT INTO usr(user_name, user_avatar, user_rating)
VALUES ('sumanth', 'sumanth.png', 5),
       ('sam', 'sam.png', 5),
       ('daniel', 'dan.png', 5),
       ('rob', 'rob.png', 5);

INSERT INTO levels(level_name, level_rating, level_diff, level_summary, level_description, user_id,
                   level_created_timestamp, level_published)
VALUES ('sumo', 4, 'medium', 'first level', '{"numLevels":1,"levels":[]}', 1, CURRENT_TIMESTAMP - INTERVAL '5 days',
        TRUE),
       ('titan', 5, 'easy', 'begin', '{"numLevels":2,"levels":[]}', 2, CURRENT_TIMESTAMP - INTERVAL '10 days', TRUE),
       ('cryptic', 3, 'medium', 'confusing', '{"numLevels":1,"levels":[]}', 3, CURRENT_TIMESTAMP - INTERVAL '15 days',
        TRUE),
       ('breeze', 4, 'hard', 'you shall not pass', '{"numLevels":5,"levels":[]}', 1,
        CURRENT_TIMESTAMP - INTERVAL '20 days', FALSE),
       ('heaven', 4, 'easy', 'easy', '{"numLevels":1,"levels":[]}', 4, CURRENT_TIMESTAMP - INTERVAL '25 days', FALSE);


INSERT INTO comments(comment_rating, comment_desc, user_id, level_id, comment_timestamp)
VALUES (4, 'Good level', 2, 1, CURRENT_TIMESTAMP - INTERVAL '5 days'),
       (5, 'Great!', 4, 2, CURRENT_TIMESTAMP - INTERVAL '10 days');
