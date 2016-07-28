#!/usr/bin/env python
# -*- coding: utf-8 -*-
# find . -name "*.pyc" -exec rm -rf {} \;

__Author__ = "Amir Mohammad"

from flask.ext.script import Manager
from application import app

manager = Manager(app)


@manager.command
def run():
    """
    run server on port 8000 and domain name ereshte.com
    """
    app.run(host='0.0.0.0', port=8000, debug=True, threaded=True)


if __name__ == '__main__':
    manager.run()
