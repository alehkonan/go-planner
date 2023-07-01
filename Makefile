run:
	docker-compose up -d

run-database:
	docker-compose up -d --build db

run-server:
	docker-compose up -d --build server
