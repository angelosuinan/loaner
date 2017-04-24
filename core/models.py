from django.db import models
from decimal import Decimal

payment_methods = (
        ('MONTHLY', 'MONTHLY'),
        ('SEMI-ANNUALLY', 'SEMI-ANNUALLY'),
        ('ANUALLY', 'ANNUALLY'),
        )


class Base(models.Model):
    """Base abstract model that provides common audit fields
        All app models should inherit this model
    """
    created_time = models.DateTimeField(auto_now_add=True)
    modified_time = models.DateTimeField(auto_now=True)
    active = models.BooleanField(default=True)

    class Meta:
        abstract = True


class LoanBase(Base):
    due_date = models.DateField(blank=True, null=True, default="2017-4-22")
    loanee = models.CharField(max_length=300, default="admin")
    payment = models.CharField(max_length=100, choices=payment_methods,
                                                            default='MONTHLY')
    balance = models.DecimalField(max_digits=1000, decimal_places=2,
            default=Decimal('0'))
    number_of_installments = models.DecimalField(max_digits=100, decimal_places=0,
            default=Decimal('1'))
