from pydantic import BaseModel, validator, Field


class UpdateUser(BaseModel):
    user_id: int = Field(alias = "userId")
    user_name: str = Field(alias = "userName")
    user_avatar: str = Field(alias = "userAvatar")
    
    @validator("userId")
    def check_uid(cls, value):
        if value < 0:
            raise ValueError("The uid must be positive")
    
    @validator("userName")
    def check_user_name(cls, value):
        if value == "":
            raise ValueError("The username must be positive")
