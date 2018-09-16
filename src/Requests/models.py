import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import datetime


ref = db.reference()

def request(request):
    ref_requests = ref.child('requests')
    ref_requests.push({
        'request': request['title'],
        'asker_user_name': request['asker_user_name'],
        'tutor_user_name': '',
        'description': request['description'],
        'category': request['category'],
        'timestamp': str(datetime.datetime.now()),
        'tutor_times': [],
        'status': 'pending',
        'publishing_permission': False,
    })
