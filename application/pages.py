#!/usr/bin/python


def database():
    # name / lastname / phone number / magor / set_Date /
    import sqlite3
    conn = sqlite3.connect('example.db')

    conn = conn.cursor()
    # CREATE TABLE
    conn.execute('''CREATE TABLE COMPANY
       (ID INT PRIMARY KEY     NOT NULL,
       NAME           TEXT    NOT NULL,
       LASTNAME       INT     NOT NULL,
       PHONE          INT     NOT NULL ,
       DATE           INT     NOT NULL ,
       RESHTE         TEXT    NOT NULL ,
       EMAIL          TEXT    NOT NULL

                );''')


    # Save (commit) the changes
    conn.commit()
    conn.close()
