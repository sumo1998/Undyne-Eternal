from typing import Optional, List, Literal
from pydantic import BaseModel, validator, Field


class CommentBase(BaseModel):
    commentBody: str
    commentRating: float
    
    @validator('commentRating')
    def check_rating(cls, value):
        if value < 1 or value > 5:
            raise ValueError("Rating should be between 1-5")
    
    @validator('commentBody')
    def check_body(cls, value):
        pass


class AddComment(CommentBase):
    userId: int
    levelId: int
    
    @validator('userId')
    def check_uid(cls, value):
        if value < 0:
            raise ValueError("invalid uid")
    
    @validator('levelId')
    def check_lid(cls, value):
        if value < 0:
            raise ValueError("invalid lid")


class UpdateComment(CommentBase):
    commentId: int


class DeleteComment(BaseModel):
    commentId: int
    levelId: int


class LevelBase(BaseModel):
    levelName: str
    levelRating: float
    levelSummary: str
    levelDescription: str
    levelDiff: str
    userId: int
    
    @validator('userId')
    def check_uid(cls, value):
        if value < 0:
            raise ValueError("invalid uid")
    
    @validator('levelDiff')
    def check_level_diff(cls, value):
        allowed_values = ["easy", "medium", "hard"]
        if value not in allowed_values:
            raise ValueError("invalid level difficulty")


class UpdateLevel(LevelBase):
    levelId: int
    
    @validator('levelId')
    def check_lid(cls, value):
        if value < 0:
            raise ValueError("invalid lid")


class AddLevel(LevelBase):
    pass


class DeleteLevel(BaseModel):
    levelId: int
    
    @validator('levelId')
    def check_lid(cls, value):
        if value < 0:
            raise ValueError("invalid lid")
