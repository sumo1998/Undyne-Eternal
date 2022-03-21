from pydantic import BaseModel, validator, Field


class UpdateUser(BaseModel):
    userId: int
    userName: str
    userAvatar: str
