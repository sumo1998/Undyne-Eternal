import os

from db import database_handler
from db.level.level_models import CommentData, LevelData

BASE_PATH = f"{os.path.dirname(os.path.realpath(__file__))}/sql"


def get_level_info(level_id):
    return database_handler.execute_query_from_files(f'{BASE_PATH}/levelInfo.sql', (level_id,), get_result = True)


def get_level_comments(level_id):
    return database_handler.execute_query_from_files(f'{BASE_PATH}/levelComments.sql', (level_id,), get_result = True)


def add_level_comment(comment_data: CommentData):
    query_file_paths = [f'{BASE_PATH}/addLevelComment.sql', f'{BASE_PATH}/updateLevelRating.sql']
    database_handler.execute_query_from_files(query_file_paths, comment_data.dict())


def update_level_comment(comment_data: CommentData):
    query_file_paths = [f'{BASE_PATH}/updateLevelComment.sql', f'{BASE_PATH}/updateLevelRating.sql']
    database_handler.execute_query_from_files(query_file_paths, comment_data.dict())


def delete_comment(comment_id):
    database_handler.execute_query_from_files(f'{BASE_PATH}/deleteComment.sql', (comment_id,))


def update_level(level_data: LevelData):
    database_handler.execute_query_from_files(f'{BASE_PATH}/updateLevel.sql', level_data.dict())


def delete_level(level_id):
    database_handler.execute_query_from_files(f'{BASE_PATH}/deleteLevel.sql', (level_id,))


def add_level(level_data: LevelData):
    print(level_data.dict())
    return database_handler.execute_query_from_files(f'{BASE_PATH}/addLevel.sql', level_data.dict(), get_result = True)[
        0]
