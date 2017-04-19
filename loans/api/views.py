
from django.contrib.auth.models import User
from django.http import Http404, HttpResponse

from .serializers import MortgageSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from loans.models import Mortgage
class MortgageList(APIView):
    def get(self, request, format=None):
       # return HttpResponse("<html><body>It is now %s.</body></html>")
        loan = Mortgage.objects.all()
        serializer = MortgageSerializer(loan, many = True)
        print ("ASDSADSADSDSA")
        return Response(serializer.data)
