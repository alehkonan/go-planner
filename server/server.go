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

	app := fiber.New()

	app.Use("/api", func (c *fiber.Ctx) error {
		c.Cookie(&fiber.Cookie{ SameSite: fiber.CookieSameSiteLaxMode })
		return c.Next()
	})

	app.Use(logger.New())

	app.Get("/api/categories", func(c *fiber.Ctx) error {
		rows, err := db.Query("SELECT * FROM categories")

		if (err != nil) {
			println(err.Error())
			return c.Status(fiber.StatusInternalServerError).SendString("Can't get categories from DB")
		}

		return c.JSON(rows)
	})

	app.Get("/api/words", func(c *fiber.Ctx) error {
		return c.SendString("All words")
	})

	app.Get("/api/words/:category", func(c *fiber.Ctx) error {
		return c.SendString("Words of the concrete category")
	})

	app.Listen(":80")
}
