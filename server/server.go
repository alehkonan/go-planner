package main

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
)

func main() {
	db, err := ConnectDB()

	if err != nil {
		fmt.Println("Error connecting to the database:", err)
		return
	}

	app := fiber.New()

	app.Get("/words", func(c *fiber.Ctx) error {
		rows, err := db.Query("SELECT * FROM words")

		if (err != nil) {
			return c.Status(500).JSON(err)
		}

		columns, err := rows.Columns()

		if (err != nil) {
			return c.Status(500).JSON(err)
		}

		return c.JSON(columns)
	})

	app.Listen(":80")
}
