export $(cat .env)

run-all:
	docker-compose up -d

run-database:
	docker-compose up -d db

run-server:
	docker-compose up --build -d server

drop-database:
	docker-compose rm -s db
	docker volume rm go-start_db
