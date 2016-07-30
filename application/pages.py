#!/usr/bin/python

__author__ = "Amir Mohammad Mohammadi"
import sqlite3


conn = sqlite3.connect('ereshte.db')
conn = conn.cursor()
conn.execute('''CREATE TABLE RESHTE
   (ID INT PRIMARY KEY     NOT NULL,
   NAME           TEXT    NOT NULL,
   LASTNAME       INT     NOT NULL,
   PHONE          INT     NOT NULL ,
   DATED          INT     NOT NULL ,
   RESHTE         TEXT    NOT NULL ,
   EMAIL          TEXT    NOT NULL ,
   TIME           TEXT    NOT NULL ,
   )''')


conn.close()