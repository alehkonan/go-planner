package models

import (
	"database/sql"
	"time"

	"gorm.io/gorm"
)

type Category struct {
	gorm.Model

	ID 						uint						`json:"id"`
	Name 					string					`json:"name"`
	Picture_url 	sql.NullString	`json:"pictureUrl"`
	Created_at 		time.Time				`json:"createdAt"`
	UpdatedAt			time.Time				`json:"updatedAt"`
	DeletedAt			sql.NullTime		`json:"deletedAt"`
}

type Word struct {
	gorm.Model

	ID 						uint						`json:"id"`
	En 						string					`json:"en"`
	Ka 						string					`json:"ka"`
	Transcription	sql.NullString	`json:"transcription"`
	Picture_url 	sql.NullString	`json:"pictureUrl"`
	Created_at 		time.Time				`json:"createdAt"`
	UpdatedAt			time.Time				`json:"updatedAt"`
	DeletedAt			sql.NullTime		`json:"deletedAt"`
}
