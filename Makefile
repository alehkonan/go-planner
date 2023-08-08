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
	-cd ./server && [ ! -f ./bin/air ] && curl -sSfL https://raw.githubusercontent.com/cosmtrek/air/master/install.sh | sh -s
	cd ./server && ./bin/air

dev-frontend:
	cd ./client && npm run dev
