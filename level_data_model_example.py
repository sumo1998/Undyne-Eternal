from level_data_model import is_valid_level_data

"""
Hey, Aaron. You better delete this file once you are done using it as a reference.
"""


def main() -> None:
    example_valid_json = """
        {
            "attacks": [
                {
                    "attackDelay": 6400,
                    "clockwiseShift": false,
                    "arrows": [
                        {"direction": "U", "reversed": true, "delay": 100, "speed": 400},
                        {"direction": "D", "reversed": false, "delay": 500, "speed": 400},
                        {"direction": "L", "reversed": false, "delay": 5000, "speed": 400},
                        {"direction": "R", "reversed": true, "delay": 8000, "speed": 400},
                        {"direction": "?", "reversed": false, "delay": 9532, "speed": 400}
                    ]
                },
                {
                    "attackDelay": 2100,
                    "clockwiseShift": false,
                    "arrows": [
                        {"direction": "?", "reversed": false, "delay": 100, "speed": 200},
                        {"direction": "?", "reversed": false, "delay": 500, "speed": 400},
                        {"direction": "U", "reversed": false, "delay": 5000, "speed": 500},
                        {"direction": "U", "reversed": true, "delay": 8000, "speed": 500},
                        {"direction": "D", "reversed": true, "delay": 9532, "speed": 600}
                    ]
                }
            ]
        }
    """
    
    example_invalid_json1 = """
        {
            "attack": [
                {
                    "attackDelay": 6400,
                    "clockwiseShift": false,
                    "arrows": [
                        {"direction": "U", "reversed": true, "delay": 100, "speed": 400},
                        {"direction": "D", "reversed": false, "delay": 500, "speed": 400},
                        {"direction": "L", "reversed": false, "delay": 5000, "speed": 400},
                        {"direction": "R", "reversed": true, "delay": 8000, "speed": 400},
                        {"direction": "?", "reversed": false, "delay": 9532, "speed": 400}
                    ]
                },
                {
                    "attackDelay": 2100,
                    "clockwiseShift": false,
                    "arrows": [
                        {"direction": "?", "reversed": false, "delay": 100, "speed": 200},
                        {"direction": "?", "reversed": false, "delay": 500, "speed": 400},
                        {"direction": "U", "reversed": false, "delay": 5000, "speed": 500},
                        {"direction": "U", "reversed": true, "delay": 8000, "speed": 500},
                        {"direction": "D", "reversed": true, "delay": 9532, "speed": 600}
                    ]
                }
            ]
        }
    """
    
    example_invalid_json2 = """
        {
            "attack": [
                {
                    "attackDelay": 10000,
                    "clockwiseShift": false,
                    "arrows": [
                        {"direction": "U", "reversed": true, "delay": 100, "speed": 400},
                        {"direction": "D", "reversed": false, "delay": 500, "speed": 400},
                        {"direction": "L", "reversed": false, "delay": 5000, "speed": 400},
                        {"direction": "R", "reversed": true, "delay": 8000, "speed": 400},
                        {"direction": "?", "reversed": false, "delay": 9532, "speed": 400}
                    ]
                },
                {
                    "attackDelay": 2100,
                    "clockwiseShift": false,
                    "arrows": [
                        {"direction": "?", "reversed": false, "delay": 100, "speed": 200},
                        {"direction": "?", "reversed": false, "delay": 500, "speed": 400},
                        {"direction": "U", "reversed": false, "delay": 5000, "speed": 500},
                        {"direction": "U", "reversed": true, "delay": 8000, "speed": 500},
                        {"direction": "D", "reversed": true, "delay": 9532, "speed": 600}
                    ]
                }
            ]
        }
    """
    
    example_invalid_json3 = """
        {
            "attack": [
                {
                    "attackDelay": 6400,
                    "clockwiseShift": false,
                    "arrows": [
                        {"direction": "U", "reversed": true, "delay": -100, "speed": 400},
                        {"direction": "D", "reversed": false, "delay": 500, "speed": 400},
                        {"direction": "L", "reversed": false, "delay": 5000, "speed": 400},
                        {"direction": "R", "reversed": true, "delay": 8000, "speed": 400},
                        {"direction": "?", "reversed": false, "delay": 9532, "speed": 400}
                    ]
                },
                {
                    "attackDelay": 2100,
                    "clockwiseShift": false,
                    "arrows": [
                        {"direction": "?", "reversed": false, "delay": 100, "speed": 200},
                        {"direction": "?", "reversed": false, "delay": 500, "speed": 400},
                        {"direction": "U", "reversed": false, "delay": 5000, "speed": 500},
                        {"direction": "U", "reversed": true, "delay": 8000, "speed": 500},
                        {"direction": "D", "reversed": true, "delay": 9532, "speed": 600}
                    ]
                }
            ]
        }
    """
    
    example_invalid_json4 = """
        {
            "attack": [
                {
                    "attackDelay": 6400,
                    "clockwiseShift": false,
                    "arrows": [
                        {"direction": "A", "reversed": true, "delay": 100, "speed": 400},
                        {"direction": "D", "reversed": false, "delay": 500, "speed": 400},
                        {"direction": "L", "reversed": false, "delay": 5000, "speed": 400},
                        {"direction": "R", "reversed": true, "delay": 8000, "speed": 400},
                        {"direction": "?", "reversed": false, "delay": 9532, "speed": 400}
                    ]
                },
                {
                    "attackDelay": 2100,
                    "clockwiseShift": false,
                    "arrows": [
                        {"direction": "?", "reversed": false, "delay": 100, "speed": 200},
                        {"direction": "?", "reversed": false, "delay": 500, "speed": 400},
                        {"direction": "U", "reversed": false, "delay": 5000, "speed": 500},
                        {"direction": "U", "reversed": true, "delay": 8000, "speed": 500},
                        {"direction": "D", "reversed": true, "delay": 9532, "speed": 600}
                    ]
                }
            ]
        }
    """
    
    print(is_valid_level_data(example_valid_json))
    print(is_valid_level_data(example_invalid_json1))
    print(is_valid_level_data(example_invalid_json2))
    print(is_valid_level_data(example_invalid_json3))
    print(is_valid_level_data(example_invalid_json4))


if __name__ == '__main__':
    main()
