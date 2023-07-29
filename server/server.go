package main

import (
	"log"
	"server/database"
	"server/router"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/favicon"
)

func main() {
	database.Connect()
	app := fiber.New()

	app.Use(favicon.New())
	app.Static("/", "./static")

	router.SetupRoutes(app)

	log.Fatal(app.Listen("localhost:8000"))
}
