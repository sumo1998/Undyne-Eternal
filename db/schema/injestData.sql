
insert into usr(user_name,user_avatar,user_rating)
values 
        ('sumanth','sumanth.png',5),
        ('sam','sam.png',5),
        ('daniel','dan.png',5),
        ('rob','rob.png',5);


insert into levels(level_name,level_rating,level_diff,level_summary,level_description, user_id)
values 
    ('sumo',4,'medium','first level','{
            "attacks": [
                {
                    "attackDelay": 1000,
                    "clockwiseShift": true,
                    "arrows": [
                        {"direction": "U", "reversed": false, "delay": 1, "speed": 9},
                        {"direction": "D", "reversed": false, "delay": 2, "speed": 8},
                        {"direction": "R", "reversed": false, "delay": 3, "speed": 7},
                        {"direction": "L", "reversed": false, "delay": 4, "speed": 6},
                        {"direction": "?", "reversed": false, "delay": 5, "speed": 5}
                    ]
                },
                {
                    "attackDelay": 345,
                    "clockwiseShift": false,
                    "arrows": [
                        {"direction": "?", "reversed": true, "delay": 6, "speed": 4},
                        {"direction": "L", "reversed": true, "delay": 7, "speed": 3},
                        {"direction": "R", "reversed": true, "delay": 8, "speed": 2},
                        {"direction": "D", "reversed": true, "delay": 9, "speed": 1},
                        {"direction": "U", "reversed": true, "delay": 10, "speed": 1}
                    ]
                }
            ]
        }',1),
    ('titan',5,'easy','begin','{"numLevels":2,"levels":[]}',2),
    ('cryptic',3,'medium','confusing','{"numLevels":1,"levels":[]}',3),
    ('breeze',4,'hard','you shall not pass','{"numLevels":5,"levels":[]}',1),
    ('heaven',4,'easy','easy','{"numLevels":1,"levels":[]}',4);


insert into comments(comment_rating,comment_desc,user_id,level_id)
values
    (4,'Good level',2,1),
    (5,'Great!',4,2);
