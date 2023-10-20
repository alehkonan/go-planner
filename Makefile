include .env
export

start:
	docker-compose up -d

start-database:
	docker-compose up -d db
	docker logs -f go-start-db-1

drop-database:
	docker-compose rm -s db
	docker volume rm go-start_db

start-server:
	-cd ./cmd/api && [ ! -f ./bin/air ] && curl -sSfL https://raw.githubusercontent.com/cosmtrek/air/master/install.sh | sh -s
	cd ./cmd/api && ./bin/air

build-server:
	docker-compose up --build -d server
	docker logs -f go-start-server-1
