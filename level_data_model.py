import json
from typing import Literal, List

import pydantic
from pydantic import BaseModel, validator, Field


class Arrow(BaseModel):
    """
    Represents an arrow in the level data.
    """
    
    direction: Literal["U", "D", "L", "R", "?"]
    reversed: bool
    delay: int
    speed: int
    
    @validator("delay")
    def validate_delay(cls, delay: int) -> None:
        """
        Validates that the delay is positive and at most 4 digits in length.
        :param delay: The delay value
        :return: None
        :raises ValueError: Raised if the delay is invalid
        """
        if delay < 0:
            raise ValueError("The delay must be a positive integer.")
        elif len(str(delay)) > 4:
            raise ValueError("The delay can only be up to 4 digits in length.")
    
    @validator("speed")
    def validate_speed(cls, speed: int) -> None:
        """
        Validates that the speed is positive and at most 3 digits in length.
        :param speed: The speed value
        :return: None
        :raises ValueError: Raised if the speed is invalid
        """
        if speed < 0:
            raise ValueError("The speed must be a positive integer.")
        elif len(str(speed)) > 3:
            raise ValueError("The speed can only be up to 3 digits in length.")


class Attack(BaseModel):
    """
    Represents an attack in the level data.
    """
    
    attack_delay: int = Field(alias = "attackDelay")
    clockwise_shift: bool = Field(alias = "clockwiseShift")
    arrows: List[Arrow]
    
    @validator("attack_delay")
    def validate_attack_delay(cls, attack_delay: int) -> None:
        """
        Validates that the attackDelay is positive and at most 4 digits in length.
        :param attack_delay: The attackDelay value
        :return: None
        :raises ValueError: Raised if the delay is invalid
        """
        if attack_delay < 0:
            raise ValueError("The attackDelay must be a positive integer.")
        elif len(str(attack_delay)) > 4:
            raise ValueError("The attackDelay can only be up to 4 digits in length.")


class LevelData(BaseModel):
    """
    Represents the overall level data.
    """
    
    attacks: List[Attack]


def is_valid_level_data(level_json: str) -> bool:
    """
    Returns true if the given JSON string is valid level data
    :param level_json: The level JSON string
    :return: True if the given JSON string is valid level data
    """
    try:
        level_dict = json.loads(level_json)
    except json.JSONDecodeError:
        return False
    
    try:
        LevelData(**level_dict)
    except pydantic.ValidationError:
        return False
    
    return True
