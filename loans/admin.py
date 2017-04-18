from django.contrib import admin

# Register your models here.

from .models import Mortgage, StudentLoan, HouseLoan, AutoLoan, PersonalLoan

admin.site.register(Mortgage)
admin.site.register(StudentLoan)
admin.site.register(HouseLoan)
admin.site.register(AutoLoan)
admin.site.register(PersonalLoan)
