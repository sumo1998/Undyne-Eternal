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
    def validate_delay(cls, delay: int) -> int:
        """
        Validates that the delay is positive and at most 4 digits in length.
        :param delay: The delay value
        :return: delay: The delay value
        :raises ValueError: Raised if the delay is invalid
        """
        if delay < 0:
            raise ValueError("The delay must be a positive integer.")
        elif len(str(delay)) > 4:
            raise ValueError("The delay can only be up to 4 digits in length.")
        return delay
    
    @validator("speed")
    def validate_speed(cls, speed: int) -> int:
        """
        Validates that the speed is positive and at most 3 digits in length.
        :param speed: The speed value
        :return: speed: The speed value
        :raises ValueError: Raised if the speed is invalid
        """
        if speed <= 0:
            raise ValueError("The speed must be a positive integer.")
        elif len(str(speed)) > 3:
            raise ValueError("The speed can only be up to 3 digits in length.")
        return speed


class Attack(BaseModel):
    """
    Represents an attack in the level data.
    """
    
    attack_delay: int = Field(alias = "attackDelay")
    clockwise_shift: bool = Field(alias = "clockwiseShift")
    arrows: List[Arrow]
    
    @validator("attack_delay")
    def validate_attack_delay(cls, attack_delay: int) -> int:
        """
        Validates that the attackDelay is positive and at most 4 digits in length.
        :param attack_delay: The attackDelay value
        :return: attack_delay: The attackDelay value
        :raises ValueError: Raised if the delay is invalid
        """
        if attack_delay < 0:
            raise ValueError("The attackDelay must be a positive integer.")
        elif len(str(attack_delay)) > 4:
            raise ValueError("The attackDelay can only be up to 4 digits in length.")
        return attack_delay


class LevelData(BaseModel):
    """
    Represents the overall level data.
    """
    
    attacks: List[Attack]
    title: str
    description: str
    difficulty: Literal["easy", "medium", "hard"]
    is_public: bool = Field(alias = "isPublic")
    
    @validator("attacks")
    def validate_attacks(cls, attacks: List[Attack]) -> List[Attack]:
        """
        Tests that there is at least one attack, and each attack has between 0 and 50 arrows.
        :param attacks: The list of attacks
        :return: attacks: The list of attacks
        :raises ValueError: Raised if the attacks list is invalid
        """
        if len(attacks) == 0:
            raise ValueError("There must be at least one attack.")
        if len(attacks) > 40:
            raise ValueError("There can only be a maximum of 40 attacks.")
        for i in range(len(attacks)):
            if len(attacks[i].arrows) == 0:
                raise ValueError(f"Attack {i + 1} must have at least one arrow.")
            if len(attacks[i].arrows) > 50:
                raise ValueError(f"Attack {i + 1} can only have between 1 and 50 arrows")
        return attacks

    @validator("title")
    def validate_title(cls, title: str) -> str:
        """
        Tests that level title has the valid length
        :param title: The level title
        :return: title: The level title
        :raises ValueError: Raised if title length is out of bounds
        """
        if len(title) < 3 or len(title) > 20:
            raise ValueError("Title must be between 3 and 20 characters.")
        return title
    
    @validator("description")
    def validate_description(cls, description: str) -> str:
        """
        Tests that level description has the valid length
        :param description: The level description
        :return: description: The level description
        :raises ValueError: Raised if description length is out of bounds
        """
        if len(description) < 3 or len(description) > 200:
            raise ValueError("Description must be between 3 and 200 characters.")
        return description


def is_valid_level_data(level_dict: dict) -> bool:
    """
    Returns true if the given JSON string is valid level data
    :param level_dict: The level data dict
    :return: True if the given JSON string is valid level data
    """
    try:
        LevelData(**level_dict)
    except pydantic.ValidationError:
        return False
    
    return True
