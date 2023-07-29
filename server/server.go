package main

import (
	"fmt"
	"server/router"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/favicon"
)

func main() {
	db, err := ConnectDB()

	if err != nil {
		fmt.Println("Error connecting to the database:", err)
		return
	}

	println(db.Stats().InUse)

	app := fiber.New()

	defer app.Shutdown()

	app.Use(favicon.New())
	app.Static("/", "./static")

	router.SetupRoutes(app)

	app.Listen(":8000")
}
