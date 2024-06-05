from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
app.config['DEBUG'] = True
socketio = SocketIO(app)

@app.route('/', methods=['POST', 'GET'])
def home():
    return render_template('home.html')

@socketio.on('connect')
def connect():
    print('Client connected')

if __name__ == '__main__':
    socketio.run(app)
