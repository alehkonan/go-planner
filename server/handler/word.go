package handler

import "github.com/gofiber/fiber/v2"

func GetWords(c *fiber.Ctx) error {
	return c.JSON("Words")
}

func GetWordsByCategory(c *fiber.Ctx) error {
	category := c.Params("category")
	return c.SendString(category)
}
