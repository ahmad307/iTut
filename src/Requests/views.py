from django.shortcuts import render, HttpResponse
import json
from Requests import models


def index(request):
    return render(request, 'Requests/index.html')


def create_request(request):
    if request.method == 'POST':
        data = request.POST
        answer_request = {
            'title': data.get('title'),
            'asker_user_name': data.get('asker_user_name'),
            'description': data.get('description'),
            'category': data.get('category')
        }
        models.request(answer_request)

        return HttpResponse(json.dumps({}), content_type='application/json')