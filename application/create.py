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

    if form.validate_on_submit():
        phone = request.form['telephone']
        date = request.form['date']
        reshte = request.form['reshte']
        


        user_number = nn()
        # conn.execute("INSERT INTO COMPANY (USER_NUMBER,NAME,LASTNAME,PHONE,DATED,RESHTE,EMAIL) \
        # VALUES (user_number, form.name.data, form.LastName.data, phone, reshte, email)");
        # conn.commit()
        
        print "name = ",form.name.data
        print "Lastname = ",form.LastName.data
        print "Phone Number = ",phone
        print "Email = ", form.email.data
        print "Reshte = ", reshte
        print "When Come = " ,date
        print "User_number = ", user_number
        
        flash("You have Signup in Ereshte :)")
        
        return redirect(url_for('taeed'))
    
    return render_template('send.html', form=form)

