
from django.conf.urls import  include, url
from django.contrib import admin

from loans.api import views2
from . import views
urlpatterns =[
        url(r'^$',views.Index.as_view(),),
    url(r'^list/', views2.LoanList.as_view()),
   # url(r'^users/(?P<pk>[0-9]+)/$', views.UserDetail.as_view()),)
   ]
