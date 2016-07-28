from flask import Flask, render_template
from application import app


@app.route('/home')
def home():
    return render_template('aahome.html')


@app.route('/taeed')
def taeed():
    return render_template('taeed.html')


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404
