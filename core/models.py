from django.db import models


from  decimal import Decimal
class Base(models.Model):
    """Base abstract model that provides common audit fields
        All app models should inherit this model
    """
    created_time = models.DateTimeField(auto_now_add=True)
    modified_time = models.DateTimeField(auto_now=True)
    active = models.BooleanField(default=True)
    class Meta:
        abstract = True

payment_methods=(
                ('MONTHLY', 'MONTHLY'),
                        ('SEMI-ANNUALLY', 'SEMI-ANNUALLY'),
                                ('ANUALLY', 'ANNUALLY'),
                                        )
class Installment(Base):
    date_paid = models.DateField(blank=True,null=True)
    price = models.DecimalField(max_digits=1000,decimal_places=2,default=Decimal('0'))
    def __str__(self):
        return str(self.date_paid) + ": " + str(self.price)
class LoanBase(Base):
    due_date = models.DateField(blank=True, null=True, auto_now_add=True)
    loanee = models.CharField(max_length=300, default="admin")
    payment =models.CharField(max_length=100, choices=payment_methods,
                                                            default='MONTHLY')
    installment = models.ForeignKey(Installment ,
            on_delete=models.CASCADE, blank=True, null=True,default=None)
    balance = models.DecimalField(max_digits=1000, decimal_places=2, default=Decimal('0'))

