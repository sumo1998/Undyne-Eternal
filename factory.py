from flask import Flask

from api.auth.auth_handler import Auth


class ObjectFactory:
    def __init__(self):
        self.objects = {}
    
    def get_auth_object(self, app: Flask = None):
        if 'auth' not in self.objects:
            if app is None:
                print("Did not initialize the auth object before calling it")
                raise RuntimeError
            self.objects['auth'] = Auth(app)
        
        return self.objects['auth']


object_factory = ObjectFactory()
