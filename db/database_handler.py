from contextlib import contextmanager
import logging
import os

from flask import current_app, g

import psycopg2
from psycopg2.pool import ThreadedConnectionPool
from psycopg2.extras import DictCursor


pool = None

def setup():
    global pool
    DATABASE_URL = os.environ.get("DATABASE_URL")
    current_app.logger.info(f"creating db connection pool")
    pool = ThreadedConnectionPool(1, 100, dsn=DATABASE_URL, sslmode='require')


@contextmanager
def get_db_connection():
    try:
        connection = None
        while connection is None:
            try:
                connection = pool.getconn()
            except:
                current_app.logger.info("failed to get connection. retrying immediately.")

        yield connection
    finally:
        if connection is not None:
            pool.putconn(connection)


@contextmanager
def get_db_cursor(commit=False):
    '''use commit = true to make lasing changes. Call this function in a with statement'''
    with get_db_connection() as connection:
      
      cursor = connection.cursor(cursor_factory=DictCursor)
      try:
          yield cursor
          if commit:
              connection.commit()
      finally:
          cursor.close()