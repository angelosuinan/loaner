from django.contrib.auth.models import User
from rest_framework import serializers
from loans.models import Mortgage, PersonalLoan, HouseLoan, AutoLoan, StudentLoan
from core.models import Installment


class MortgageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mortgage
        fields = ['pk', 'loan_name', 'due_date', 'loanee',
                'balance', 'payment', 'number_of_installments']


class PersonalSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalLoan
        fields = ['pk', 'loan_name', 'due_date', 'loanee',
                'balance', 'payment', 'number_of_installments']


class HouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = HouseLoan
        fields = ['pk', 'loan_name', 'due_date', 'loanee',
                'balance', 'payment', 'number_of_installments']


class AutoSerializer(serializers.ModelSerializer):
    class Meta:
        model = AutoLoan
        fields = ['pk', 'loan_name', 'due_date', 'loanee',
                'balance', 'payment', 'number_of_installments']


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentLoan
        fields = ['pk', 'loan_name', 'due_date', 'loanee',
                'balance', 'payment', 'number_of_installments']


class InstallmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Installment
        fields = ['pk', 'date_paid', 'loan', 'price']
