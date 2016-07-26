'''
this python file is creating the barcode and create pdf file.
in this  algorithm we should also create barcode with 
unique number .

and after do it merge the barcode pdf and document pdf .
'''

from set_user_number import nn


def createBarCodes():
    """
    Create barcode examples and embed in a PDF
    """
    from reportlab.graphics.barcode import code39, code128, code93
    from reportlab.graphics.barcode import eanbc, qr, usps
    from reportlab.graphics.shapes import Drawing
    from reportlab.lib.pagesizes import letter
    from reportlab.lib.units import mm
    from reportlab.pdfgen import canvas
    from reportlab.graphics import renderPDF
    bv = str(nn())
    save_name = bv + ".pdf"
    c = canvas.Canvas(save_name, pagesize=letter)
    barcode_value = bv

    barcode39 = code39.Extended39(barcode_value)
    barcode39Std = code39.Standard39(barcode_value, barHeight=20, stop=1)
    # code93 also has an Extended and MultiWidth version
    barcode93 = code93.Standard93(barcode_value)
    barcode128 = code128.Code128(barcode_value)
    # the multiwidth barcode appears to be broken
    # barcode128Multi = code128.MultiWidthBarcode(barcode_value)

    barcode_usps = usps.POSTNET("50158-9999")

    codes = [barcode39, barcode39Std, barcode93, barcode128, barcode_usps]

    x = 1 * mm
    y = 285 * mm
    x1 = 6.4 * mm

    for code in codes:
        code.drawOn(c, x, y)
        y -= 15 * mm

        # draw the eanbc8 code
        # barcode_eanbc8 = eanbc.Ean8BarcodeWidget(barcode_value)
        # bounds = barcode_eanbc8.getBounds()
        # width = bounds[2] - bounds[0]
        # height = bounds[3] - bounds[1]
        # d = Drawing(50, 10)
        # d.add(barcode_eanbc8)
        # renderPDF.draw(d, c, 15, 555)

        # draw the eanbc13 code
        barcode_eanbc13 = eanbc.Ean13BarcodeWidget(barcode_value)
        bounds = barcode_eanbc13.getBounds()
        width = bounds[2] - bounds[0]
        height = bounds[3] - bounds[1]
        d = Drawing(50, 10)
        d.add(barcode_eanbc13)
        renderPDF.draw(d, c, 15, 465)

        # draw a QR code
        # qr_code = qr.QrCodeWidget('www.mousevspython.com')
        # bounds = qr_code.getBounds()
        # width = bounds[2] - bounds[0]
        # height = bounds[3] - bounds[1]
        # d = Drawing(45, 45, transform=[45. / width, 0, 0, 45. / height, 0, 0])
        # d.add(qr_code)
        # renderPDF.draw(d, c, 15, 405)
        # c.save()


def createPDF():
    from pyPdf import PdfFileWriter, PdfFileReader

    output = PdfFileWriter()
    input1 = PdfFileReader(file("document1.pdf", "rb"))
    # print the title of document1.pdf
    print "title = %s" % input1.getDocumentInfo().title

    # add page 1 from input1 to output document, unchanged
    output.addPage(input1.getPage(0))

    # add page 4 from input1, but first add a watermark from another pdf:
    # page4 = input1.getPage(3)
    # watermark = PdfFileReader(file("watermark.pdf", "rb"))
    # page4.mergePage(watermark.getPage(0))

    # add page 5 from input1, but crop it to half size:
    page5 = input1.getPage(4)
    page5.mediaBox.upperRight = (
        page5.mediaBox.getUpperRight_x() / 2,
        page5.mediaBox.getUpperRight_y() / 2
    )
    output.addPage(page5)

    # print how many pages input1 has:
    print "document1.pdf has %s pages." % input1.getNumPages()

    # finally, write "output" to document-output.pdf
    outputStream = file("document-output.pdf", "wb")
    output.write(outputStream)
    outputStream.close()
