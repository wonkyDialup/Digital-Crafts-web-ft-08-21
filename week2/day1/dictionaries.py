
ramit = {
  'name': 'Ramit',
  'email': 'ramit@gmail.com',
  'interests': ['movies', 'tennis'],
  'friends': [
    {
      'name': 'Jasmine',
      'email': 'jasmine@yahoo.com',
      'interests': ['photography', 'tennis']
    },
    {
      'name': 'Jan',
      'email': 'jan@hotmail.com',
      'interests': ['movies', 'tv']
    }
  ]
}

print(ramit['email'])
print(ramit['interests'])
print(ramit.get('friends')[0]['email'])
print(ramit.get('friends')[1]['interests'][1])



def countFriends(key, value):
    if ramit.get(key) == None:
        ramit[key] = value

countFriends("friends_count", 2)
print(ramit)


    