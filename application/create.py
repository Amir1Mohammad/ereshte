__author__ = "Amir Mohammad"


#flask imports:
from wtforms.validators import Length, Required
from wtforms import SubmitField, RadioField, StringField, Form
from flask import request,redirect,url_for
from flask.ext.wtf import form
from flask import Flask,render_template,flash

# project import:
from application import app
import test
from formed import signall
from c_barcode import createBarCodes

#pdf import :
import pyPdf

@app.route('/send', methods=['GET', 'POST'])
def send_form():
    form = signall(request.form)
    if form.validate_on_submit():
        phone = request.form['telephone']
        date = request.form['date']
        reshte = request.form['reshte']
        createBarCodes(form.name, form.LastName, reshte, phone)
        print form.name, form.LastName, phone, form.email, reshte
        flash("You have Signup in this page")
        return redirect(url_for('taeed'))
    return render_template('send.html', form=form)



