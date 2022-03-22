import json
from typing import Literal, List

import pydantic
from pydantic import BaseModel, validator, Field, conint, constr, conlist


class Arrow(BaseModel):
    """
    Represents an arrow in the level data.
    """
    
    direction: Literal["U", "D", "L", "R", "?"]
    reversed: bool
    delay: conint(gt = 0, lt = 9999)
    speed: conint(gt = 1, lt = 999)


class Attack(BaseModel):
    """
    Represents an attack in the level data.
    """
    
    attack_delay: conint(gt = 0, lt = 9999) = Field(alias = "attackDelay")
    clockwise_shift: bool = Field(alias = "clockwiseShift")
    arrows: List[Arrow]


class LevelData(BaseModel):
    """
    Represents the overall level data.
    """
    
    attacks: conlist(Attack, min_items = 1, max_items = 40)
    title: constr(min_length = 3, max_length = 20)
    description: constr(min_length = 3, max_length = 200)
    difficulty: Literal["easy", "medium", "hard"]
    is_public: bool = Field(alias = "isPublic")
    
    @validator("attacks")
    def validate_attacks(cls, attacks: List[Attack]) -> List[Attack]:
        """
        Tests that each attack has between 0 and 50 arrows.
        :param attacks: The list of attacks
        :return: attacks: The list of attacks
        :raises ValueError: Raised if the attacks list is invalid
        """
        
        for i in range(len(attacks)):
            if len(attacks[i].arrows) == 0:
                raise ValueError(f"Attack {i + 1} must have at least one arrow.")
            if len(attacks[i].arrows) > 50:
                raise ValueError(f"Attack {i + 1} can only have between 1 and 50 arrows")
        return attacks
