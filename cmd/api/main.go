package main

import (
	"log"

	"github.com/alehkonan/go-start-api/internal/database"
	"github.com/gofiber/fiber/v2"
)

func main() {
	database.Connect()
	app := fiber.New()

	SetupRoutes(app)

	app.Static("/", "./static")

	log.Panic(app.Listen(":8000"))

}
