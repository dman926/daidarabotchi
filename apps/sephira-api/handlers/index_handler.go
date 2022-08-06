package handlers

import (
	"github.com/gorilla/mux"

	"daidarabotchi/apps/sephira-api/middleware"
)

func IndexRouting() *mux.Router {
	r := mux.NewRouter()
	// User
	r.HandleFunc("/user/ws", UserWSHandler).Methods("GET")
	// Middleware
	middleware.IndexMiddleware(r)
	return r
}
