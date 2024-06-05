# football-quiz
Football trivia with multiplayer mode

# Getting started 

1. Create a Python virtual environment: This can be done by running the command `make venv`. This command uses Python 3 to create a new virtual environment in the current directory, under the folder .venv.

2. Activate the virtual environment: Run the command `make activate`. This command activates the virtual environment that was created in the previous step. The command to activate the environment differs based on the operating system. For Windows, it's `.venv\Scripts\activate`, and for Unix-based systems, it's `. .venv/bin/activate`.

3. Install dependencies: Run the command `make install`. This command installs the project's dependencies, which are listed in the requirements.txt file. This command also activates the virtual environment if it hasn't been activated already.

4. Run the `main.py` file: Run the command make run. This command runs the `main.py` file. Before running the file, it ensures that the virtual environment is activated and the dependencies are installed.

- Default target: If you run `make` without specifying a target, it will run the install target. This means it will activate the virtual environment and install the dependencies.

# TODO 

## 1. Setup Flask SocketIO 

- Start with a simple chat room using Flask SocketIO https://flask-socketio.readthedocs.io/en/latest/getting_started.html

- A simple tutorial https://www.youtube.com/watch?v=AMp6hlA8xKA
- A more fancy tutorial   https://www.youtube.com/watch?v=mkXdvs8H7TA

## 2. Create a one player Room 
- A room is created when the server is started 
- A player signs-up to the room 
- When the number of players in a room is equal to 1, boradcast a question (example: who's the best player ?). The answer to the questionned needs to be stored in a variable (example: 3laya El Brigui)
- The player writes the answer
- Once the answer is recieved on the server side, a check is made: 
  - If correct print the winner name 
  - Else print the correct answer (example: 3laya El Brigui)

