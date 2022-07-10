package config

import (
	"fmt"
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB
var err error

var db_string = fmt.Sprintf(
	"host=%s user=%s password=%s dbname=%s port=%s sslmode=%s",
	os.Getenv("NX_SEPHIRA_DB_HOST"),
	os.Getenv("NX_SEPHIRA_DB_USER"),
	os.Getenv("NX_SEPHIRA_DB_PASSWORD"),
	os.Getenv("NX_SEPHIRA_DB_DBNAME"),
	os.Getenv("NX_SEPHIRA_DB_PORT"),
	os.Getenv("NX_SEPHIRA_DB_SSLMODE"),
)

func DbConfiguration() {
	DB, err = gorm.Open(postgres.Open(db_string), &gorm.Config{})
	if err != nil {
		fmt.Println(err.Error())
	}
}
