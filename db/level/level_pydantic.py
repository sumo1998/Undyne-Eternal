from pydantic import BaseModel, validator, Field
import json


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
    levelId: int
    
    @validator('commentId')
    def check_comment_id(cls, value):
        if value < 0:
            raise ValueError("invalid comment id")

    @validator('levelId')
    def check_lid(cls, value):
        if value < 0:
            raise ValueError("invalid lid")


class DeleteComment(BaseModel):
    commentId: int
    levelId: int
    
    @validator('commentId')
    def check_comment_id(cls, value):
        if value < 0:
            raise ValueError("invalid comment id")
    
    @validator('levelId')
    def check_lid(cls, value):
        if value < 0:
            raise ValueError("invalid lid")


class LevelBase(BaseModel):
    levelName: str
    levelRating: float
    levelSummary: str
    levelDescription: str
    levelDiff: str
    userId: int
    levelPublished: bool
    
    @validator('levelName')
    def check_level_name(cls, value):
        if value == "":
            raise ValueError("Level Name empty")
    
    @validator('userId')
    def check_uid(cls, value):
        if value < 0:
            raise ValueError("invalid uid")
    
    @validator('levelDiff')
    def check_level_diff(cls, value):
        allowed_values = ["easy", "medium", "hard"]
        if value not in allowed_values:
            raise ValueError("invalid level difficulty")
    
    @validator('levelDescription')
    def check_level_description(cls, value):
        try:
            json.loads(value)
        except ValueError:
            raise ValueError("Invalid level description")


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
