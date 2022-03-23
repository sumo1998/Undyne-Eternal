from pydantic import BaseModel, validator


class UpdateUser(BaseModel):
    userId: int
    userName: str
    userAvatar: str
    
    @validator("userId")
    def check_uid(cls, value):
        if value < 0:
            raise ValueError("invalid uid")
    
    @validator("userName")
    def check_user_name(cls, value):
        if value == "":
            raise ValueError("Invalid userName")
