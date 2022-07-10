package main

import (
	"fmt"
	"net/http"

	"daidarabotchi/apps/sephira-api/config"
	"daidarabotchi/apps/sephira-api/handlers"
	"daidarabotchi/apps/sephira-api/migrations"
)

func main() {
	fmt.Println("Server started")
	config.DbConfiguration()
	migrations.IndexMigration()

	server := &http.Server{
		Addr:    ":5200",
		Handler: handlers.IndexRouting(),
	}
	server.ListenAndServe()
}
