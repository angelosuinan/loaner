from django.conf.urls import include, url
from django.contrib import admin

from loans.api import views2
from . import views
urlpatterns = [
        url(r'^$', views.Index.as_view(), name="index"),
        url(r'^list/post', views2.InstallmentView.as_view()),
        url(r'^list/(?P<filter>.+|)$', views2.LoanList.as_view()),
   ]
