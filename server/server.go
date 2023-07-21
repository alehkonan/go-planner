package main

import (
	"fmt"
	"server/handler"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

func main() {
	db, err := ConnectDB()

	if err != nil {
		fmt.Println("Error connecting to the database:", err)
		return
	}

	println(db.Stats().InUse)

	app := fiber.New()

	app.Use(logger.New())

	app.Static("/", "./static")

	app.Get("/api/categories", handler.GetCategories)

	app.Get("/api/words", handler.GetWords)

	app.Get("/api/words/:category", handler.GetWordsByCategory)

	app.Listen(":8000")
}
