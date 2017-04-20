# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-04-19 08:14
from __future__ import unicode_literals

from decimal import Decimal
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Installment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_time', models.DateTimeField(auto_now_add=True)),
                ('modified_time', models.DateTimeField(auto_now=True)),
                ('active', models.BooleanField(default=True)),
                ('date_paid', models.DateTimeField(blank=True, null=True)),
                ('price', models.DecimalField(decimal_places=2, default=Decimal('0'), max_digits=1000)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='loanbase',
            name='installment',
            field=models.ForeignKey(default=2000, on_delete=django.db.models.deletion.CASCADE, to='core.Installment'),
        ),
    ]