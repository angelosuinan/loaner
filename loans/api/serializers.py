
from django.contrib.auth.models import User
from rest_framework import serializers
from loans.models import Mortgage

class MortgageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mortgage
        fields = ['id','pk','loan_name','due_date','loanee', 'balance','payment','installment']
