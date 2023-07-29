package database

import (
	"fmt"
	"log"
	"os"
	"server/models"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

var Instance *gorm.DB

func Connect() {
	user := os.Getenv("POSTGRES_USER")
	password := os.Getenv("POSTGRES_PASSWORD")
	dbname := os.Getenv("POSTGRES_DB")
	url := os.Getenv("POSTGRES_URL")
	port := os.Getenv("POSTGRES_PORT")

	if user == "" || password == "" || dbname == "" || url == "" || port == "" {
		log.Fatal("Cannot read env variables")
	}

	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable", url, user, password, dbname, port)

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		log.Fatal("Failed to connect to database. \n", err)
	}

	log.Println("Database connected")
	db.Logger = logger.Default.LogMode(logger.Error)

	log.Println("Running migrations...")
	db.AutoMigrate(&models.Category{}, &models.Word{})
	log.Println("Models have been migrated")

	Instance = db
}
