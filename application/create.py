#!/usr/bin/python

# python import :
import sqlite3
import time

# flask imports:

from flask import render_template, flash, request, redirect, url_for

# project import:
from application.formed import Signall
from application import app
from application.set_user_number import nn
from application import zarinpal

__author__ = "Amir Mohammad Mohammadi"


@app.route('/send', methods=['GET', 'POST'])
def send_form():
    from pages import conn
    form = Signall()

    try:

        import sqlite3
        conn = sqlite3.connect('ereshte.db')
        cursor = conn.cursor()
        cursor.execute("DROP TABLE IF EXISTS COMPANY")
        cursor.execute('''CREATE TABLE COMPANY
         (ID INT PRIMARY KEY    NOT NULL,
         NAME           TEXT    NOT NULL,
         LASTNAME       TEXT     NOT NULL,
         PHONE          TEXT     NOT NULL ,
         RESHTE         TEXT    NOT NULL ,
         EMAIL          TEXT    NOT NULL );''')


    except:
        print "cant store in the database ."

    if form.validate_on_submit():
        # Go to the Bank page :
        #return redirect('request')

        user_number = nn()
        phone = request.form['telephone']
        
        reshte = request.form['reshte']
        
        user_number = int(user_number)
        nname = form.name.data
        nname = str(nname)
        llname = form.LastName.data
        phone = str(phone)
        email = form.email.data
        reshte = str(reshte)
        email = str(email)
        cursor.execute("INSERT INTO COMPANY (ID, NAME,LASTNAME,PHONE,RESHTE,EMAIL) \
        VALUES (?, ?, ?, ?, ?, ?, ?)", (user_number, nname, llname, phone, reshte, email));
        conn.commit()

        print "name = ", nname
        print "Lastname = ", llname
        print "Phone Number = ", phone
        print "Email = ", email
        print "Reshte = ", reshte
        print "When Come = ", date
        print "User_number = ", user_number

        conn.close()
        return redirect('taeed')
        flash("You have Signup in Ereshte :)")

    return render_template('send.html', form=form)
