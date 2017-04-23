
from django.conf.urls import  include, url
from django.contrib import admin

from . import views

urlpatterns =[
                url(r'^signin$',views.SignIn.as_view(), name="signin"),
                url(r'^signup$', views.SignUp.as_view(), name="signup")
        ]

