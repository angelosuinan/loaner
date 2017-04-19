from __future__ import unicode_literals

from django.db import models

# Create your models here.
from django.contrib.auth.models import User, Group
from core.models import Base, LoanBase
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
class Mortgage(LoanBase):
    loan_name = models.CharField(max_length=100, default="Mortgage")

class StudentLoan(LoanBase):
    loan_name = models.CharField(max_length=100, default="Student")
class AutoLoan(LoanBase):
    loan_name = models.CharField(max_length=100, default="Auto")
class PersonalLoan(LoanBase):
    loan_name = models.CharField(max_length=100, default="Personal")

class HouseLoan(LoanBase):
    loan_name = models.CharField(max_length=100, default="House")



