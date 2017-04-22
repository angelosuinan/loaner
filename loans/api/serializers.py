from django.contrib.auth.models import User
from rest_framework import serializers
from loans.models import Mortgage, PersonalLoan, HouseLoan, AutoLoan, StudentLoan


class MortgageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mortgage
        fields = ['pk','loan_name','due_date','loanee',
                'balance','payment','installment']

class PersonalSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalLoan
        fields = ['pk','loan_name','due_date','loanee',
                'balance','payment','installment']


class HouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = HouseLoan
        fields = ['pk','loan_name','due_date','loanee',
                'balance','payment','installment']


class AutoSerializer(serializers.ModelSerializer):
    class Meta:
        model = AutoLoan
        fields = ['pk','loan_name','due_date','loanee',
                'balance','payment','installment']


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentLoan
        fields = ['pk','loan_name','due_date','loanee',
                'balance','payment','installment']
