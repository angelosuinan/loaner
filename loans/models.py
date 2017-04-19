from __future__ import unicode_literals

from django.db import models

# Create your models here.
from django.contrib.auth.models import User, Group
from core.models import Base
from  decimal import Decimal

payment_methods=(
        ('MONTHLY', 'MONTHLY'),
        ('SEMI-ANNUALLY', 'SEMI-ANNUALLY'),
        ('ANUALLY', 'ANNUALLY'),
        )
users=()
def get_Users():
    #get all user and put it in options
    pass
class Mortgage(Base):
    due_date = models.DateTimeField(blank=True, null=True)
    balance = models.DecimalField(max_digits=1000, decimal_places=2, default=Decimal('0'))
    loanee = models.CharField(max_length=300, default="")
    payment =models.CharField(max_length=100, choices=payment_methods,
                                default='MONTHLY')
class StudentLoan(Base):
    due_date = models.DateTimeField(blank=True, null= True)
    balance = models.DecimalField(max_digits=1000, decimal_places=2, default=Decimal('0'))
    loanee = models.CharField(max_length=300, default="")

    payment =models.CharField(max_length=100, choices=payment_methods,
                                default='MONTHLY')
    def __str__(self):
        return (str(self.loanee))
class AutoLoan(Base): 
    due_date = models.DateTimeField(blank=True, null =True)
    balance = models.DecimalField(max_digits=1000, decimal_places=2, default=Decimal('0'))
    loanee = models.CharField(max_length=300,default="")

    payment =models.CharField(max_length=100, choices=payment_methods,
                                default='MONTHLY')
    def __str__(self):
        return (str(self.loanee))
class PersonalLoan(Base):
    due_date = models.DateTimeField(blank=True, null = True)
    balance = models.DecimalField(max_digits=1000, decimal_places=2, default=Decimal('0'))
    payment =models.CharField(max_length=100, choices=payment_methods,
                                default='MONTHLY')
    loanee = models.CharField(max_length=300, default="")

    def __str__(self):
        return (str(self.loanee))
class HouseLoan(Base):
    due_date = models.DateTimeField(blank=True, null = True)
    balance = models.DecimalField(max_digits=1000, decimal_places=2, default=Decimal('0'))
    payment =models.CharField(max_length=100, choices=payment_methods,
                                default='MNT')
    loanee = models.CharField(max_length=300, default="")

class Installments(Base):
    date_paid = models.DateTimeField(blank=True,null=True)
    price = models.DecimalField(max_digits=1000,decimal_places=2,default=Decimal('0'))
    def __str__(Base):
        return str(date_paid + ": " + price)
