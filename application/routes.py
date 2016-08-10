# -*- coding: utf-8 -*-

from flask import Flask, render_template, Response
from application import app
from application.formed import Taeed
from application.set_user_number import nn


@app.route('/')
def home():
    return render_template('aahome.html')


@app.route('/taeed')
def taeed():
    f = Taeed()
    if f.validate_on_submit():
        print "None"
        return u'''
        <html>
        <div align="right">
        <h1>پرداخت انجام شد </h1>
            <p>
            پس از ثبت نام برای گرفتن ساعت مراجعه , حتما با دفتر تماس حاصل فرمایید
            شماره تماس 1122334455 میباشد .
            </p>
        <p>برای دریافت بلیط روی دکمه زیر کلیک نمایید...</p>
            </div>
        <div align="center"><input name="submit" button href="download" value="دریافت بلیط"></div>

        </body>
        </html>

        '''
    # run it to terminal
    # wkhtmltopdf http://ereshte.ir:8000/ user_number.pdf
    return render_template('taeed.html')


@app.route('/download')
def download():
    # with open("outputs/Adjacency.csv") as fp:
    #     csv = fp.read()
    csv = '1,2,3\n4,5,6\n'
    #fixme the Address file from static file pdf
    return Response(
        csv,
        mimetype="text/csv",
        headers={"Content-disposition":
                     "attachment; filename=username.pdf"})


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404
