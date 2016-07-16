#imports:

from flask import Flask,render_template,request,app
import random
import time




def sqlite():
	# name / lastname / phone number / magor / set_Date / 
	import sqlite3
	
	conn = sqlite3.connect('example.db')

	c = conn.cursor()
	#CREATE TABLE
	c.execute('''CREATE TABLE stocks
	             (date text, trans text, symbol text, qty real, price real)''')

	# Insert a row of data
	#this data is for example :
	c.execute("INSERT INTO stocks VALUES ('2006-01-05','BUY','RHAT',100,35.14)")

	# Save (commit) the changes
	conn.commit()


	conn.close()
