package main

import (
	"database/sql"
	"fmt"
	"os"

	_ "github.com/lib/pq"
)

func ConnectDB() (*sql.DB, error) {
	user := os.Getenv("POSTGRES_USER")
	password := os.Getenv("POSTGRES_PASSWORD")
	dbName := os.Getenv("POSTGRES_DB")
	url := os.Getenv("POSTGRES_URL")
	port := os.Getenv("POSTGRES_PORT")

	if user == "" || password == "" || dbName == "" || url == "" || port == "" {
		return nil, fmt.Errorf("one or more environment variables for DB are not set")
	}

	connString := fmt.Sprintf("postgres://%s:%s@%s:%s/%s?sslmode=disable", user, password, url, port, dbName)

	db, err := sql.Open("postgres", connString)

	if err != nil {
		return nil, fmt.Errorf("error connecting to the database: %w", err)
	}

	return db, nil
}
