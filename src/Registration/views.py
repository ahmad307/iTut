from django.shortcuts import render, HttpResponse
import json
from Registration import models


def index(request):
    return render(request, 'Registration/index.html')

def register_user(request):
    if request.method == 'POST':
        data = request.POST
        user = {
            'user_name': data.get('user_name'),
            'name': data.get('name'),
            'description': data.get('description'),
            'categories': data.get('categories').split(',')
        }
        print(data.get('name'))

        # Save user to firebase
        models.user(user)
    return HttpResponse(json.dumps({}), content_type='application/json')
