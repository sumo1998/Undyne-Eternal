create table usr (
  user_id SERIAL PRIMARY KEY,
  user_name text not null,
  user_avatar text not null,
  user_rating float
);

create table levels (
  level_id SERIAL PRIMARY KEY,
  level_name text not null,
  level_rating float,
  level_summary text,
  level_description json not null, 
  level_diff text not null,
  user_id int not null,
  
  constraint fk_user  
    FOREIGN KEY(user_id)
        references usr(user_id) on delete cascade
);

create table comments (
    comment_id serial primary key,
    comment_rating float not null,
    comment_desc text,
    user_id int,
    level_id int,
    constraint fk_user
        foreign key(user_id)
            references usr(user_id) on delete cascade,

    constraint fk_level
        foreign key(level_id)
            references levels(level_id) on delete cascade
);