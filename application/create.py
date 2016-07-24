# flask imports:

from flask import render_template, flash
from flask import request, redirect, url_for

# project import:
from c_barcode import createBarCodes
from application.formed import Signall
from application import app
from application.set_user_number import nn
__author__ = "Amir Mohammad"


@app.route('/send', methods=['GET', 'POST'])
def send_form():
    form = Signall()
    if form.validate_on_submit():
        phone = request.form['telephone']
        date = request.form['date']
        reshte = request.form['reshte']
        #createBarCodes()
        print form.name.data, form.LastName.data, phone, form.email.data, reshte, date, nn()
        flash("You have Signup in ereshte")
        return redirect(url_for('taeed'))
    return render_template('send.html', form=form)
