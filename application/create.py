__author__ = "Amir Mohammad"


#imports:
from wtforms.validators import Length, Required
from wtforms import SubmitField, RadioField, StringField, Form
from flask import request,redirect,url_for
from flask.ext.wtf import form
from flask import Flask,render_template

# project import:
from application import app
import test
from formed import signall
from c_barcode import createBarCodes

#pdf import :
import pyPdf

@app.route('/send', methods=['GET', 'POST'])
def send_form():
    name = None
    form = signall(request.form)
    if form.validate_on_submit():

        name = request.form['firstname']
        last = request.form['lastname']
        phone = request.form['telephone']
        email = request.form['email']
        date = request.form['date']        
        if reshte  != "" and code_melli != "" and phone != "" and email != "":
            print name,last,reshte,phone,code_melli
            print "Logged in successfully"
            createBarCodes(name, last, reshte, phone)
            return redirect(url_for('taeed'))
    return render_template('send.html', form=form, name = name)



