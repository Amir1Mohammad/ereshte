from flask import Flask, render_template
from application import app
from application.formed import taeed
from application.set_user_number import nn

@app.route('/')
def home():
    return render_template('aahome.html')


@app.route('/taeed')
def taeed():
	user_number = nn()
	f_obj = taeed()
	if f_obj.validate_on_submit():
		#run it to terminal
		#wkhtmltopdf http://ereshte.ir:8000/ user_number.pdf
		return render_template('taeed.html')


@app.errorhandler(404)
def page_not_found(e):

    return render_template('404.html'), 404
