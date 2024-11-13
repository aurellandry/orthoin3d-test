backend-init:
	cd backend && pip install -r requirements.txt && cd ..

backend-migrations:
	cd backend && python3 manage.py makemigrations && python3 manage.py migrate && cd ..

backend-start:
	cd backend && python3 manage.py runserver

frontend-init:
	cd frontend && npm install && cd ..

frontend-start:
	cd frontend && npm start

init: backend-init backend-migrations frontend-init
