package models

import (
	"database/sql"
	"time"
)

type Category struct {
	ID 						uint						`gorm:"primaryKey" json:"id"`
	Name 					string					`json:"name"`
	Picture_url 	*string					`json:"pictureUrl"`
	CreatedAt 		*time.Time			`json:"createdAt"`
	UpdatedAt			*time.Time			`json:"updatedAt"`
	DeletedAt			*time.Time			`json:"deletedAt"`
}

type Word struct {
	ID 						uint						`gorm:"primaryKey" json:"id"`
	En 						string					`json:"en"`
	Ka 						string					`json:"ka"`
	Transcription	sql.NullString	`json:"transcription"`
	Picture_url 	sql.NullString	`json:"pictureUrl"`
	Created_at 		time.Time				`json:"createdAt"`
	UpdatedAt			time.Time				`json:"updatedAt"`
	DeletedAt			sql.NullTime		`json:"deletedAt"`
}
