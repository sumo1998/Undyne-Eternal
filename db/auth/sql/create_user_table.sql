CREATE TABLE IF NOT EXISTS user_info (
    user_id       TEXT PRIMARY KEY,
    user_name     TEXT NOT NULL,
    user_email    TEXT NOT NULL,
    user_avatar   TEXT,
    creation_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
