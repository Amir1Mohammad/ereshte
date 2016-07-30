# -*- coding: utf-8 -*-
__author__ = "Amir Mohammad Mohammadi"

from flask_wtf import Form
from wtforms import StringField, SubmitField, RadioField
from wtforms import StringField, SubmitField
from wtforms.validators import Required, Length, Email
from wtforms.validators import DataRequired, Email


# base form class
class Signall(Form):
    name = StringField('', validators=[Required(), Length(1, 20)])
    LastName = StringField(u'نام خانوادگی', validators=[Required(), Length(1, 20)])
    email = StringField(u'ايميل', validators=[Required(), Email()])
    submit = SubmitField(u'تایید و ارسال اطلاعات')

#taeed form
class Taeed(Form):
	# name = StringField('',validators=[DataRequired(), Length(1, 20)])
	submit = SubmitField(u'چاپ و صدور بلیط')