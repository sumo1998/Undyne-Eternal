import json
from typing import Literal

from flask import session
from pydantic import BaseModel, validator, Field, conint, confloat, constr


class LevelData(BaseModel):
    level_id: conint(ge = 0) = Field(0, alias = 'levelId')
    level_name: str = Field(alias = 'levelName')
    level_diff: Literal["easy", "medium", "hard"] = Field(alias = "levelDiff")
    level_rating: float = Field(alias = "levelRating")
    level_summary: str = Field(alias = "levelSummary")
    level_description: str = Field(alias = "levelDescription")
    user_id: str = ''
    level_published: bool = Field(alias = "levelPublished")
    
    @validator("user_id")
    def get_user_data_if_logged_in(cls, value):
        if 'profile' in session:
            return session['profile']['user_id']
        return value
    
    @validator("level_description")
    def verify_level_description_is_a_valid_json(cls, value):
        try:
            json.loads(value)
        except json.JSONDecodeError as e:
            raise ValueError("The level description is not a valid json")
        
        return value


class CommentBase(BaseModel):
    comment_desc: constr(curtail_length = 200) = Field(alias = "commentBody")
    comment_rating: confloat(ge = 1.0, le = 5.0) = Field(alias = "commentRating")


class CommentData(CommentBase):
    user_id: str = ''
    level_id: conint(gt = 0) = Field(alias = "levelId")
    
    @validator('user_id')
    def check_uid(cls, value):
        if 'profile' in session:
            return session['profile']['user_id']
        raise ValueError("The user cannot add comment without logging in")
