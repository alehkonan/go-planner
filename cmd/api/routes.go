package main

import (
	"github.com/alehkonan/go-start-api/internal/handlers"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

func SetupRoutes(app *fiber.App) {
	api := app.Group("/api", logger.New(), cors.New())

	// Categories
	categoryApi := api.Group("/category")
	categoryApi.Get("/", handlers.GetCategories)
	categoryApi.Post("/", handlers.CreateCategory)

	// Words
	wordApi := api.Group("/word")
	wordApi.Get("/", handlers.GetWords)
	wordApi.Get("/:category", handlers.GetWordsByCategory)
}
