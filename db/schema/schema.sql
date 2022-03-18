create table usr (
  user_id SERIAL PRIMARY KEY,
  user_name varchar(20) not null,
  user_avatar text not null,
  user_rating float
);

create type diff_t as enum('easy', 'medium', 'hard');

create extension pg_trgm;

create table levels (
  level_id SERIAL PRIMARY KEY,
  level_name varchar(30) not null,
  level_rating float,
  level_summary varchar(300),
  level_description json not null, 
  level_diff diff_t not null,
  level_created_timestamp timestamp not null,
  user_id int not null,
  level_ts tsvector generated always as (to_tsvector('english',level_name || ' ' || level_summary)) stored,
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
    comment_timestamp timestamp not null,
    constraint fk_user
        foreign key(user_id)
            references usr(user_id) on delete cascade,

    constraint fk_level
        foreign key(level_id)
            references levels(level_id) on delete cascade
);

