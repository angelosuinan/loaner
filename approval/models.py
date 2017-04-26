from __future__ import unicode_literals
from django.dispatch import receiver
from django.db import models
from core.models import Base, LoanBase


class Approval(Base):
    loan = models.ForeignKey(LoanBase, on_delete=models.CASCADE, blank=True,
            null=True, default=None)
    approve_this_loan = models.BooleanField(default=False)

    def __str__(self):
        return str(self.loan) + ": " + str(self.approve_this_loan)


@receiver(models.signals.post_save, sender=Approval)
def execute_after_save(sender, instance, created, *args, **kwargs):
    if created:
        s = sender.loan.__get__(instance)
        s.approve = True
        s.save()
        print(s.approve)
