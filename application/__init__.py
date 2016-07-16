from flask import Flask,render_template, redirect, url_for, request
from flask.ext.script import Manager
from flask.ext.migrate import MigrateCommand
from flask_bootstrap import Bootstrap


app = Flask(__name__, template_folder='../templates', static_folder='../static')
Bootstrap(app)
app.config['SECRET_KEY'] = 'topsecret'


#original project import :
from application import create, formed, pages, routes, test
