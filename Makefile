include .env
export

run-all:
	docker-compose up -d

run-database:
	docker-compose up -d db
	docker logs -f go-start-db-1

drop-database:
	docker-compose rm -s db
	docker volume rm go-start_db

build-server:
	docker-compose up --build -d server
	docker logs -f go-start-server-1

dev-server:
	cd ./server && ./bin/air
