package handler

import (
	"server/database"
	"server/models"

	"github.com/gofiber/fiber/v2"
)

func GetCategories(c *fiber.Ctx) error {
	categories := []models.Category{}

	database.Instance.Find(&categories)

	return c.JSON(categories)
}
