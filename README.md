# football-quiz
Football trivia with multiplayer mode

# Makefile Overview

This Makefile automates the setup, running, and maintenance of a Python project. Here's a quick guide to using it:

### Setup Project

To install dependencies and prepare the virtual environment:

```make
make install
```
### Run Project
To activate the virtual environment and run the project:
```make
make run
```
### Update Dependencies

To update the `requirements.txt` file based on `requirements.in`:

```make
make update-requirements
```

### Clean Project
To remove the virtual environment and clean up `.pyc` files:

```make
make clean
```


# TODO 

## 1. Setup Flask SocketIO 

- Start with a simple chat room using Flask SocketIO https://flask-socketio.readthedocs.io/en/latest/getting_started.html

- A simple tutorial https://www.youtube.com/watch?v=AMp6hlA8xKA

## 2. Create a one player Room 
- A room is created when the server is started 
- A player signs-up to the room 
- When the number of players in a room is equal to 1, boradcast a question (example: who's the best player ?). The answer to the questionned needs to be stored in a variable (example: 3laya El Brigui)
- The player writes the answer
- Once the answer is recieved on the server side, a check is made: 
  - If correct print the winner name 
  - Else print the correct answer (example: 3laya El Brigui)

