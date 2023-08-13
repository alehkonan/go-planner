package main

import (
	"log"
	"server/database"
	"server/router"

	"github.com/gofiber/fiber/v2"
)

func main() {
	database.Connect()
	app := fiber.New()

	router.SetupRoutes(app)

	log.Panic(app.Listen(":8000"))
}
