# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-04-19 08:33
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_auto_20170419_0821'),
    ]

    operations = [
        migrations.AlterField(
            model_name='loanbase',
            name='installment',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='core.Installment'),
        ),
    ]
