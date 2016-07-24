# flask imports:
from flask import render_template, flash
from flask import request, redirect, url_for


# project import:
from c_barcode import createBarCodes
from application.formed import Signall


__author__ = "Amir Mohammad"


def send_form():

    form = Signall()
    if form.validate_on_submit():
        phone = request.form['telephone']
        date = request.form['date']
        reshte = request.form['reshte']
        createBarCodes()
        print form.name.first(), form.LastName.first(), phone, form.email.first(), reshte, date
        flash("You have Signup in ereshte")
        return redirect(url_for('taeed'))
    return render_template('send.html', form=form)
