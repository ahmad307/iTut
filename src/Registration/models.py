import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

# Authentication & Initialization
cred = credentials.Certificate('D:/Projects/itut-1-firebase-adminsdk-w95j8-16c10afd42.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://itut-1.firebaseio.com'
})
ref = db.reference()


def user(user):
    users_ref = ref.child('users')
    users_ref.push({
        'user_name': user['user_name'],
        'name': user['name'],
        'rating': 0.0,
        'description': user['description'],
        'categories': user['categories'],
        'requests': [],
    })
