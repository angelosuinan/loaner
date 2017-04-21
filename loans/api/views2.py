from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from django.contrib.auth.models import User
from django.http import Http404, HttpResponse
from django.utils.six import BytesIO
from .serializers import LoanSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from loans.models import Mortgage, PersonalLoan, StudentLoan, AutoLoan, HouseLoan
from django.views.decorators.csrf import csrf_exempt

from itertools import chain
from collections import OrderedDict
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
            serializer = LoanSerializer(result , many = True) #TO inherit
            content = JSONRenderer().render(serializer.data)
            return Response(serializer.data)
        return HttpResponse("LOGIN FIRST")
    @csrf_exempt
    def post(self, request, format=None):
        serializer = LoanSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response (serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
class InstallmentView(APIView):

    def post(self,request,format=None):
        pass
