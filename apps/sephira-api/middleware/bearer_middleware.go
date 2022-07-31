package middleware

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"
	"regexp"

	"github.com/golang-jwt/jwt/v4"
)

const ContextUserKey ContextKey = "user"

var tokenRegex = regexp.MustCompile("(?i)BEARER ")

func UserFromContext(ctx context.Context) string {
	return ctx.Value(ContextUserKey).(string)
}

func BearerMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		tokenString := r.Header.Get("Authorization")
		ctx := r.Context()
		if tokenString != "" {
			tokenString = tokenRegex.ReplaceAllString(tokenString, "")
			token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
				if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
					return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
				}
				secret := os.Getenv("NX_SEPHIRA_JWT_SECRET_KEY")
				if secret == "" {
					log.Fatal("JWT secret key not specified in env")
				}
				return []byte(secret), nil
			})
			if err != nil {
				if claims, ok := token.Claims.(jwt.MapClaims); ok && claims["sub"] != nil && token.Valid {
					ctx = context.WithValue(ctx, ContextUserKey, claims["sub"])
				}
			}
		}
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}
