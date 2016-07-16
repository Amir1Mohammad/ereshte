from flask import Flask,render_template, redirect, url_for, request
from flask.ext.script import Manager
from flask.ext.migrate import MigrateCommand


app = Flask(__name__, template_folder='../templates', static_folder='../static')
app.config['SECRET_KEY'] = 'topsecret'


#original project import :
from application import create, formed, pages, routes, test
