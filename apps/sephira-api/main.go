package main

import (
	"context"
	"log"
	"net/http"
	"os"
	"os/signal"

	"daidarabotchi/apps/sephira-api/db"
	"daidarabotchi/apps/sephira-api/handlers"
)

func main() {
	log.Println("Server started")

	db.DbConfigure()

	server := &http.Server{
		Addr:    ":5200",
		Handler: handlers.IndexRouting(),
	}

	// Graceful server shutdown
	idleConnsClosed := make(chan struct{})
	go func() {
		sigint := make(chan os.Signal, 1)
		signal.Notify(sigint, os.Interrupt)
		<-sigint

		if err := server.Shutdown(context.Background()); err != nil {
			log.Println("Error shutting down server:", err)
		}
		db.CloseDBs()
		close(idleConnsClosed)
	}()

	err := server.ListenAndServe()
	if err != http.ErrServerClosed {
		log.Fatalln("Server failed to start")
	}
	<-idleConnsClosed
}
