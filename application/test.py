from flask import Flask
app = Flask(__name__)
app.config['SECRET KEY'] = 'top secret'
import create
import formed
import pages
import routes

if __name__ == '__main__':
    app.run(debug=True , port=8080)
