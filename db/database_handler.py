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
    DATABASE_URL = "postgres://plzkaynmbipdfc:67cc2161a90cd49e5031f0c211e68148d80e335416ff2f41d1c13419a850d9be@ec2-34-204-127-36.compute-1.amazonaws.com:5432/d4vlr17ui4s6ng"
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