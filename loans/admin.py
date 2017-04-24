from django.contrib import admin

# Register your models here.

from .models import Mortgage, StudentLoan, HouseLoan, AutoLoan, PersonalLoan


class MortgageAdmin(admin.ModelAdmin):
    list_display = (
            'id',
            'loanee',
            'due_date',
            'balance',
            'payment',
            'number_of_installments',
            )
    list_filter = (
            'id',
            'loanee',
            'due_date',
            'balance',
            'payment',
            'number_of_installments'
            )
    search_fields = (
            )
    readonly_fields = (
            )


class StudentLoanAdmin(MortgageAdmin):
    pass


class HouseLoanAdmin(MortgageAdmin):
    pass


class AutoLoanAdmin(MortgageAdmin):
    pass


class PersonalLoanAdmin(MortgageAdmin):
    pass


admin.site.register(Mortgage, MortgageAdmin)
admin.site.register(StudentLoan, StudentLoanAdmin)
admin.site.register(HouseLoan, HouseLoanAdmin)
admin.site.register(AutoLoan, AutoLoanAdmin)
admin.site.register(PersonalLoan, PersonalLoanAdmin)
