from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from django.contrib.auth.models import User
from django.http import Http404, HttpResponse
from django.utils.six import BytesIO
from .serializers import (MortgageSerializer, HouseSerializer, AutoSerializer,
        PersonalSerializer, StudentSerializer, InstallmentSerializer)
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from loans.models import Mortgage, PersonalLoan, StudentLoan, AutoLoan, HouseLoan
from django.views.decorators.csrf import csrf_exempt
from core.models import Installment
import json
from itertools import chain
from collections import OrderedDict
from datetime import date, timedelta
class LoanList(APIView):

    def get(self, request, format=None):
        if request.user.is_authenticated():
            username = request.user.username
            M = Mortgage.objects.filter(loanee=username)
            P = PersonalLoan.objects.filter(loanee=username)
            S = StudentLoan.objects.filter(loanee=username)
            A = AutoLoan.objects.filter(loanee=username)
            H = HouseLoan.objects.filter(loanee=username)
            result= list(chain(M, P, S, A, H))
            serializer = MortgageSerializer(result , many = True)
            content = JSONRenderer().render(serializer.data)
            return Response(serializer.data)
        return HttpResponse("LOGIN FIRST")
    
    @csrf_exempt
    def post(self,request,format=None):
        request.data['loanee']=request.user.username
        d = ""
        print request.data['payment']
        if request.data['payment']=='MONTHLY':
            d = date.today() + timedelta(days=30)
        elif request.data['payment'] == 'SEMI-ANNUALLY':
            d = date.today() + timedelta(days=185)
        elif request.data['payment'] == 'ANNUALLY':
            d = date.today() + timedelta(days=360)
        request.data['due_date'] = d

        serializer = MortgageSerializer(data = request.data)
        print request.data['loan_name']
        if request.data['loan_name'] == "MORTGAGE":
            serializer = MortgageSerializer(data = request.data)
        if request.data['loan_name'] == "PERSONAL":
            print("SDDASDASDASC")
            serializer = PersonalSerializer(data = request.data)
        if request.data['loan_name'] == "AUTO":
            serializer = AutoSerializer(data = request.data)
        if request.data['loan_name'] == "HOUSE":
            serializer = HouseSerializer(data = request.data)
        if request.data['loan_name'] == "STUDENT":
            serializer = StudentSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            print serializer.data
            return Response (serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class InstallmentView(APIView):

    def get(self, request, format=None):
        data = Installment.objects.all()
        serializer = InstallmentSerializer(data, many = True)
        if request.user:
            return Response(serializer.data)
        return HttpResponse("SAD")
    
    
    @csrf_exempt
    def post(self,request,format=None):
        serializer = LoanSerializer(data = request.data)
        if serializer.is_valid():
            return Response (serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

