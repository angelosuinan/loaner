from django.conf.urls import url, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets
from django.contrib import admin
from django.contrib.auth import views


urlpatterns = [
   # url(r'^', include(router.urls)),
    url(r'^', include('loans.urls', namespace='loans')),
   # url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^admin/', admin.site.urls,),
    url(r'^accounts/logout/$', views.logout, name='logout', kwargs={'next_page': '/'}),
    url(r'^accounts/', include('accounts.urls', namespace='accounts')),
]
