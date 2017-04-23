from django.shortcuts import render
from django.views.generic import View
from django.http import HttpResponse
# Create your views here.

class Index(View):
    template_name = 'loans/index.html'
    def get(self,request):
        if request.user.is_authenticated():
            user = request.user
            return render(request, self.template_name,{'user':user})
        return render(request, self.template_name,)
