# Create a Python virtual environment
venv:
	python3 -m venv .venv

# Activate the virtual environment
activate: venv
ifeq ($(OS),Windows_NT) 
	.venv\Scripts\activate
else
	. .venv/bin/activate
endif

# Install dependencies
install: activate
	pip install -r requirements.txt

# Run the main.py file
run: install
	python main.py

# Default target
.PHONY: default
default: install