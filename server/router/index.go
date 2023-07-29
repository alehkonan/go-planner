package router

import (
	"server/handler"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

func SetupRoutes(app *fiber.App) {
	api := app.Group("/api", logger.New(), cors.New())

	// Categories
	categoryApi := api.Group("/category")
	categoryApi.Get("/", handler.GetCategories)

	// Words
	wordApi := api.Group("/word")
	wordApi.Get("/", handler.GetWords)
	wordApi.Get("/:category", handler.GetWordsByCategory)
}
