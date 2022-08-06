package main

import (
	"fmt"
	"log"
	"net"
	"os"
	"os/signal"
	"syscall"

	"daidarabotchi/apps/sephira-api/db"
	"daidarabotchi/apps/sephira-api/services/user"

	"google.golang.org/grpc"
)

func main() {
	// Start up
	log.Println("SEPHIRA starting up...")
	db.DbConfigure()
	port := os.Getenv("NX_SEPHIRA_TCP_PORT")
	if port == "" {
		log.Fatalln("TCP port not specified in environment")
	}
	lis, err := net.Listen("tcp", fmt.Sprintf(":%s", port))
	if err != nil {
		log.Fatalf("Failed to listen on tcp port %s: %v\n", port, err)
	}

	userService := user.NewServer()

	server := grpc.NewServer()

	user.RegisterUserServiceServer(server, &userService)

	// Graceful shutdown
	idleConnsClosed := make(chan struct{})
	go func() {
		sigint := make(chan os.Signal, 1)
		signal.Notify(sigint, os.Interrupt, syscall.SIGTERM)
		<-sigint

		log.Println("SEPHIRA shutting down...")
		server.GracefulStop()
		db.CloseDBs()
		close(idleConnsClosed)
		log.Println("SEPHIRA shut down successfully")
	}()

	log.Printf("SEPHIRA beginning to serve on port %s\n", port)
	if err := server.Serve(lis); err != nil {
		log.Fatalf("Failed to serve gRPC on tcp port %s: %v\n", port, err)
	}
	<-idleConnsClosed
}
