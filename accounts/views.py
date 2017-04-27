from django.shortcuts import render, redirect
from django.views.generic import View
from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError


class SignIn(View):

    def get(self, request):
        if request.user.is_authenticated():
            return render(request, 'loans/index.html')
        return render(request, 'accounts/sign-in.html',)

    def post(self, request):
        if request.method == 'POST':
            usern = self.request.POST.get('user', None)
            pwd = self.request.POST.get('pwd', None)
            user = authenticate(username=usern, password=pwd)
            if user is not None:
                login(request, user)
                return render(request, 'loans/index.html', {'user': user})
            else:
                return render(request, 'accounts/sign-in.html',)


class SignUp(View):

    def get(self, request):
        if request.user.is_authenticated():
            return render(request, 'loans/index.html')
        return render(request, 'accounts/sign-up.html')

    def post(self, request):
        if request.method == 'POST':
            try:
                usern = self.request.POST.get('user', None)
                pwd = self.request.POST.get('pwd', None)
                email = self.request.POST.get('email', None)
                user = User.objects.create_user(usern, email, pwd)
                user.save()
                if(authenticate(username=usern, password=pwd)):
                    return render(request, 'accounts/sign-in.html',)
            except(IntegrityError):
                return render(request, 'accounts/sign-up.html',)
