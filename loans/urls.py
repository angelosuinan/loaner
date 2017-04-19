
from django.conf.urls import  include, url
from django.contrib import admin

from loans.api import views

urlpatterns =[
    url(r'^list/', views.MortgageList.as_view()),
   # url(r'^users/(?P<pk>[0-9]+)/$', views.UserDetail.as_view()),)
   ]
