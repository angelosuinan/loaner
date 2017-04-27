from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404, HttpResponse
from loans.models import Mortgage, PersonalLoan, StudentLoan, AutoLoan, HouseLoan
from django.views.decorators.csrf import csrf_exempt
from .serializer import ApprovalSerializer
from approval.models import Approval
from core.models import LoanBase

class ApprovalList(APIView):

    def get(self, request, format=None):
        if request.user.is_authenticated():
            username = request.user.username
            l = LoanBase.objects.filter(loanee=username)
            approval = Approval.objects.filter(loan__in=l)
            print approval
            serializer = ApprovalSerializer(approval, many=True)
            return Response(serializer.data)
        return HttpResponse("LOGIN FIRST")
