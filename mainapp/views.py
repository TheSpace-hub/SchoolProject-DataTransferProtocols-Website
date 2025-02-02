import json
from socket import socket, AF_INET, SOCK_STREAM

from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse

print('Ну-с, понеслась')
server_socket = socket(AF_INET, SOCK_STREAM)
server_socket.bind(('', 25570))
print('Ожидание подключения')
server_socket.listen(1)
client_socket, client_address = server_socket.accept()
print('Ну наконец-то кто-то подключился')


def index_page(request):
    context = {}
    return render(request, 'index.html', context)


@csrf_exempt
def key_status(request):
    if request.method == 'POST':
        data = json.loads(client_socket.recv(1024).decode('UTF-8'))
        client_socket.send(b'{"level": 0}')
        return HttpResponse(json.dumps({
            'k1': data['k1'],
            'k2': data['k2'],
            'k3': data['k3'],
            'k4': data['k4'],
            'k5': data['k5'],
            'k6': data['k6'],
            'k7': data['k7'],
        }))
