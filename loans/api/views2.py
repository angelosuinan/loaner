from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from django.contrib.auth.models import User
from django.http import Http404, HttpResponse
from django.utils.six import BytesIO
from .serializers import MortgageSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from loans.models import Mortgage

from collections import OrderedDict
class MortgageList(APIView):
    def get(self, request, format=None):
       # return HttpResponse("<html><body>It is now %s.</body></html>")
        if request.user.is_authenticated():
            username = request.user.username
            M = Mortgage.objects.filter(loanee=username)
            import pdb
            pdb.set_trace()
            serializer = MortgageSerializer(M, many = True) #TO inherit
            content = JSONRenderer().render(serializer.data)
            return Response(serializer.data)
        return HttResponse("LOGIN FIRST")
    def post(self, request, format=None):
        serializer = MortgageSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response (serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
