import os
from datetime import timedelta

import firebase_admin
import requests
from dotenv import load_dotenv, find_dotenv
from firebase_admin import credentials
from firebase_admin.storage import bucket
from google.cloud.storage.bucket import Bucket

load_dotenv(find_dotenv())


class Firebase:
    def __init__(self):
        self.__credentials = credentials.Certificate(
            {
                "type": os.getenv("type"),
                "project_id": os.getenv("project-id"),
                "private_key_id": os.getenv("private_key_id"),
                "private_key": os.getenv("private_key").replace(r"\n", "\n"),
                "client_email": os.getenv("client_email"),
                "client_id": os.getenv("client_id"),
                "auth_uri": os.getenv("auth_uri"),
                "token_uri": os.getenv("token_uri"),
                "auth_provider_x509_cert_url": os.getenv("auth_provider_x509_cert_url"),
                "client_x509_cert_url": os.getenv("client_x509_cert_url")
            }
        )
        self.__bucket_name = "todo-undyne.appspot.com"
        self.__app = firebase_admin.initialize_app(self.__credentials)
    
    def __get_storage_bucket(self) -> Bucket:
        return bucket(name = self.__bucket_name, app = self.__app)
    
    def get_signed_url(self, file_name, file_type = 'jpeg'):
        return self.__get_storage_bucket().blob(file_name).generate_signed_url(
            expiration = timedelta(minutes = 10),
            method = "PUT",
            content_type = f"image/{file_type}",
        )
    
    def get_file_url(self, file_name):
        url = f"https://firebasestorage.googleapis.com/v0/b/{self.__bucket_name}/o/{file_name}"
        response = requests.get(url).json()
        return f"{url}?alt=media&token={response['downloadTokens']}"
