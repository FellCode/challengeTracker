import requests;

with open('games.txt','r') as file:
    names = file.read().splitlines()

api_endpoint = 'http://localhost:8080/api/v1/games'

for name in names:
    data = {
        'name' : name
    }

    response = requests.post(api_endpoint, json=data)

    if response.status_code == 200:
        print(f'Successfully set POST request for name: {name}')
    else:
         print(f'Failed to send POST request for name: {name}')
         print(response.text)
