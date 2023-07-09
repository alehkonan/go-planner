export $(cat .env)

run-all:
	docker-compose up -d

run-database:
	docker-compose up -d db
	docker-compose logs -f

drop-database:
	docker-compose rm -s db
	docker volume rm go-start_db

build-server:
	docker-compose up --build -d server
	docker-compose logs -f
