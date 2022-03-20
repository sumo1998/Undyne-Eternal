/*
    Add dummy users to usr table
*/
insert into usr(user_name,user_avatar,user_rating) 
values 
        ('sumanth','sumanth.png',5),
        ('sam','sam.png',5),
        ('daniel','dan.png',5),
        ('rob','rob.png',5);

/*
    Add levels
*/
insert into levels(level_name,level_rating,level_diff,level_summary,level_description, user_id)
values 
    ('sumo',4,'medium','first level','{"numLevels":1,"levels":[]}',1),
    ('titan',5,'easy','begin','{"numLevels":2,"levels":[]}',2),
    ('cryptic',3,'medium','confusing','{"numLevels":1,"levels":[]}',3),
    ('breeze',4,'hard','you shall not pass','{"numLevels":5,"levels":[]}',1),
    ('heaven',4,'easy','easy','{"numLevels":1,"levels":[]}',4);


/*
    Add comments
*/
insert into comments(comment_rating,comment_desc,user_id,level_id)
values
    (4,'Good level',2,1),
    (5,'Great!',4,2);
