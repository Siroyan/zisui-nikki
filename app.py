#!/usr/bin/env python3

from aws_cdk import core

from zisui_nikki.zisui_nikki_stack import ZisuiNikkiStack


app = core.App()
ZisuiNikkiStack(app, "zisui-nikki")

app.synth()
