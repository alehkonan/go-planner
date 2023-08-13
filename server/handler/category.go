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

func CreateCategory(c *fiber.Ctx) error {
	type NewCategory struct {
		Name string `json:"name"`
	}
	newCategory := new(NewCategory)

	if err := c.BodyParser(newCategory); err != nil {
		return err
	}

	database.Instance.Create(&models.Category{
		Name: newCategory.Name,
	})

	return c.JSON("Category created")
}
