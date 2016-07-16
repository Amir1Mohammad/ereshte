# -*- coding: utf-8 -*-
__author__ = "Amir Mohammad"

from flask.ext.wtf import Form
from wtforms import StringField, SubmitField, RadioField
from wtforms import StringField, SubmitField
from wtforms.validators import Required, Length, Email


# base form class
class signall(Form):
    name = StringField(u'نام', validators=[Required(), Length(1, 20)])
    LastName = StringField(u'نام خانوادگی', validators=[Required(), Length(1, 20)])
    
    submit = SubmitField(u'تایید و ارسال اطلاعات')
