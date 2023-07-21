package handler

import "github.com/gofiber/fiber/v2"

func GetCategories(c *fiber.Ctx) error {
	return c.JSON("Categories")
	// type Category struct {
	// 		Id 						int							`json:"id"`
	// 		Name 					string					`json:"name"`
	// 		Picture_url 	*string					`json:"pictureUrl"`
	// 		Created_at 		time.Time				`json:"createdAt"`
	// 	}

	// 	var categories []Category

	// 	rows, err := db.Query("SELECT * FROM categories")

	// 	if (err != nil) {
	// 		println(err.Error())
	// 		return c.Status(fiber.StatusInternalServerError).SendString("Can't get categories from DB")
	// 	}

	// 	defer rows.Close()

	// 	for rows.Next() {
	// 		var category Category
	// 		err := rows.Scan(&category.Id, &category.Name, &category.Picture_url, &category.Created_at)

	// 		if (err != nil) {
	// 			return c.Status(fiber.StatusInternalServerError).SendString("Can't get category from rows")
	// 		}

	// 		categories = append(categories, category)
	// 	}

	// 	return c.JSON(categories)
}
