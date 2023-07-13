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
	name := os.Getenv("POSTGRES_DB")

	if user == "" || password == "" || name == "" {
		return nil, fmt.Errorf("one or more environment variables for DB are not set")
	}

	connString := fmt.Sprintf("postgres://%s:%s@db:5432/%s?sslmode=disable", user, password, name)

	db, err := sql.Open("postgres", connString)

	if err != nil {
		return nil, fmt.Errorf("error connecting to the database: %w", err)
	}

	return db, nil
}
