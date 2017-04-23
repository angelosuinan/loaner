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
    
    def __str__(self):
        return str(self.loanee) + str(self.loan_name)

class StudentLoan(LoanBase):
    loan_name = models.CharField(max_length=100, default="Student")

    def __str__(self):
        return str(self.loanee) + str(self.loan_name)


class AutoLoan(LoanBase):
    loan_name = models.CharField(max_length=100, default="Auto")

    def __str__(self):
        return str(self.loanee) + str(self.loan_name)


class PersonalLoan(LoanBase):
    loan_name = models.CharField(max_length=100, default="Personal")

    def __str__(self):
        return str(self.loanee) + str(self.loan_name)


class HouseLoan(LoanBase):
    loan_name = models.CharField(max_length=100, default="House")

    def __str__(self):
        return str(self.loanee) + str(self.loan_name)



