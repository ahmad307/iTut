import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import datetime

# Authentication & Initialization
'''cred = credentials.Certificate('D:/Projects/itut-1-firebase-adminsdk-w95j8-16c10afd42.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://itut-1.firebaseio.com'
})'''
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
