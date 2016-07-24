from flask import Flask, render_template, redirect, url_for, request
from flask_bootstrap import Bootstrap

app = Flask(__name__, template_folder='../templates', static_folder='../static')
Bootstrap(app)
app.config['SECRET_KEY'] = 'topsecret'

# original project import :
from application import create, formed, pages, routes, test
