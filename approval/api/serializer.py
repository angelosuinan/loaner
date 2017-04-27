from django.contrib.auth.models import User
from rest_framework import serializers
from approval.models import Approval


class ApprovalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Approval
        fields = ['pk', 'loan','approve_this_loan', ]
