package main

import (
	"fmt"
	"time"

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

	app.Use(logger.New())

	app.Get("/api/categories", func(c *fiber.Ctx) error {
		type Category struct {
			Id 						int							`json:"id"`
			Name 					string					`json:"name"`
			Picture_url 	*string					`json:"pictureUrl"`
			Created_at 		time.Time				`json:"createdAt"`
		}

		var categories []Category

		rows, err := db.Query("SELECT * FROM categories")

		if (err != nil) {
			println(err.Error())
			return c.Status(fiber.StatusInternalServerError).SendString("Can't get categories from DB")
		}

		defer rows.Close()

		for rows.Next() {
			var category Category
			err := rows.Scan(&category.Id, &category.Name, &category.Picture_url, &category.Created_at)

			if (err != nil) {
				return c.Status(fiber.StatusInternalServerError).SendString("Can't get category from rows")
			}

			categories = append(categories, category)
		}

		return c.JSON(categories)
	})

	app.Get("/api/words", func(c *fiber.Ctx) error {
		return c.SendString("All words")
	})

	app.Get("/api/words/:category", func(c *fiber.Ctx) error {
		return c.SendString("Words of the concrete category")
	})

	app.Listen(":80")
}
