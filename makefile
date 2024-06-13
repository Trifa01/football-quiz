all: install run

install: venv
	. .venv/bin/activate && pip install -r requirements.txt

venv:
	test -d .venv || python3 -m venv .venv 
	. .venv/bin/activate && pip install pip-tools

run:
	. .venv/bin/activate && pip -V
	. .venv/bin/activate && python3 run.py

update-requirements:
	. .venv/bin/activate && pip-compile requirements.in

clean:
	rm -rf .venv
	find -iname "*.pyc" -delete