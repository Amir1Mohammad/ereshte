#!/usr/bin/python

import sqlite3
from application.create import send_form
from application.pages import conn


class admin_db:
    def __init__(self):
        pass

    #self.user_number = user_number

    def show(self):
        conn = sqlite3.connect('ereshte.db')

        print "Opened database successfully"
        cursor = conn.execute('SELECT ID, NAME, PHONE, RESHTE, EMAIL from COMPANY')

        for row in cursor:

            print "ID = ", row[0]
            print "NAME = ", row[1]
            print "PHONE = ", row[2]
            # print "DATED = ", row[3]
            print "RESHTE = ", row[4]
            print "EMAIL = ", row[5], "\n"
            print "==================================================="


    def delete(self,user_number):
        conn.execute('DELETE from COMPANY where ID=self.user_number;')
        conn.commit


db_obj = admin_db()
inp = str(raw_input("show/delete : "))

if inp == "show":
    db_obj.show()


elif inp == "delete":
    get = raw_input(int())
    db_obj.delete(get)
    print "Your user Number Deleted Successfully !!!"
else:
    print "Wrong Typing . Try it again"
