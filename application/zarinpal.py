# -*- coding: utf-8 -*-

# Project imports :
from application import app
import environ


__author__ = 'Amir Mohammad Mohammadi'
__url__ = 'ereshte.ir'

#flask imports:
from flask import Flask, url_for, redirect, request
from suds.client import Client


MMERCHANT_ID = 'b333c6c0-56fd-11e6-921d-005056a205be'  # Required
ZARINPAL_WEBSERVICE = 'https://www.zarinpal.com/pg/services/WebGate/wsdl'  # Required
amount = 1000  # Amount will be based on Toman  Required
description = u'توضیحات تراکنش تستی'  # Required
email = 'amir_day1374@yahoo.com'  # Optional
mobile = '09128020911'  # Optional


@app.route('/request/')
def send_request():
    client = Client(ZARINPAL_WEBSERVICE)
    result = client.service.PaymentRequest(MMERCHANT_ID,
                                           amount,
                                           description,
                                           email,
                                           mobile,
                                           str(url_for('verify', _external=True)))
    if result.Status == 100:
        return redirect('https://www.zarinpal.com/pg/StartPay/' + result.Authority)
    else:
        return 'Error'


@app.route('/verify/', methods=['GET', 'POST'])
def verify():
    client = Client(ZARINPAL_WEBSERVICE)
    if request.args.get('Status') == 'OK':
        result = client.service.PaymentVerification(MMERCHANT_ID,
                                                    request.args['Authority'],
                                                    amount)
        if result.Status == 100:
            return 'Transaction success. RefID: ' + str(result.RefID) + '''
            <html><body>
            <a href="/download">Click me to Download Ticket.</a>
            </body></html>
            '''
        elif result.Status == 101:
            return 'Transaction submitted : ' + str(result.Status)
        else:
            return 'Transaction failed. Status: ' + str(result.Status)
    else:
        return 'Transaction failed or canceled by user'

