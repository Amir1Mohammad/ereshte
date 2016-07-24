'''
this python file is creating the barcode .
in this  algorithm we should also create barcode with 
unique number .

'''

# barcode import :
import barcode
from StringIO import StringIO

# project import :
from set_user_number import nn


def createBarCodes():
    """
    Create barcode examples and embed in a PDF
    """
    bv = nn()
    bv = str(bv)

    EAN = barcode.get_barcode_class('ean13')
    ean = EAN(bv)
    fp = StringIO()
    return ean.write(fp)