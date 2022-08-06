package main

import (
	"log"

	"daidarabotchi/apps/sephira-api/db"
)

func main() {
	// Start up
	log.Println("SEPHIRA starting up...")
	db.DbConfigure()
	log.Println("SEPHIRA started successfully")

	// Shutdown
	log.Println("SEPHIRA shutting down...")
	db.CloseDBs()
	log.Println("SEPHIRA shutdown successfully")
}
