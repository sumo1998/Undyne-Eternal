from flask import Flask

from auth_handler import Auth

"""
Some of the things like auth and db might need access to the base level flask app object
So we could either create all these base routes in the app.py itself or create a factory and every use objects from here

If we keep somethings in the base app.py, my concern is circular import might become a problem. Having a factory solves that issue
And we can use one object for the whole project
"""


class ObjectFactory:
    def __init__(self):
        self.objects = {}
    
    def _create_auth_object(self, app: Flask = None):
        if app is None:
            print("Did not initialize the auth object before calling it")
            raise RuntimeError
        self.objects['auth'] = Auth(app)
    
    def get_auth_object(self, app: Flask = None):
        if 'auth' not in self.objects:
            self._create_auth_object(app)
        
        return self.objects['auth']


object_factory = ObjectFactory()
