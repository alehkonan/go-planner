package main

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

func main() {
	db, err := ConnectDB()

	if err != nil {
		fmt.Println("Error connecting to the database:", err)
		return
	}

	println(db.Driver())

	app := fiber.New()

	app.Use("/api", func (c *fiber.Ctx) error {
		c.Cookie(&fiber.Cookie{ SameSite: fiber.CookieSameSiteNoneMode })
		return c.Next()
	})

	app.Use(logger.New())

	app.Get("/api/categories", func(c *fiber.Ctx) error {
		return c.SendString("All categories")
	})

	app.Get("/api/words", func(c *fiber.Ctx) error {
		return c.SendString("All words")
	})

	app.Get("/api/words/:category", func(c *fiber.Ctx) error {
		return c.SendString("Words of the concrete category")
	})

	app.Listen(":80")
}
