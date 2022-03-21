CREATE TABLE usr (
    user_id     SERIAL PRIMARY KEY,
    user_name   VARCHAR(20) NOT NULL,
    user_avatar TEXT        NOT NULL,
    user_rating FLOAT
);

CREATE TYPE DIFF_T AS ENUM ('easy', 'medium', 'hard');

CREATE EXTENSION pg_trgm;

CREATE TABLE levels (
    level_id                SERIAL PRIMARY KEY,
    level_name              VARCHAR(30) NOT NULL,
    level_rating            FLOAT,
    level_summary           VARCHAR(300),
    level_description       JSON        NOT NULL,
    level_diff              DIFF_T      NOT NULL,
    level_created_timestamp TIMESTAMP   NOT NULL,
    level_published         BOOLEAN     NOT NULL,
    user_id                 INT         NOT NULL,
    level_ts                TSVECTOR GENERATED ALWAYS AS (TO_TSVECTOR('english', level_name || ' ' || level_summary)) STORED,
    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
            REFERENCES usr (user_id) ON DELETE CASCADE
);

CREATE TABLE comments (
    comment_id        SERIAL PRIMARY KEY,
    comment_rating    FLOAT     NOT NULL,
    comment_desc      TEXT,
    user_id           INT,
    level_id          INT,
    comment_timestamp TIMESTAMP NOT NULL,
    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
            REFERENCES usr (user_id) ON DELETE CASCADE,
    
    CONSTRAINT fk_level
        FOREIGN KEY (level_id)
            REFERENCES levels (level_id) ON DELETE CASCADE
);
