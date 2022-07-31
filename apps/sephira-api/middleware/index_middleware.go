package middleware

import (
	"github.com/gorilla/mux"
)

type ContextKey string

func IndexMiddleware(r *mux.Router) {
	r.Use(BearerMiddleware)
}
