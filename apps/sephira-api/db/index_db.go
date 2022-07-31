package db

import (
	"context"
	"errors"
	"log"
	"os"

	"github.com/jackc/pgx/v4/pgxpool"
)

var dbPool *pgxpool.Pool

// var redisClient *redis.Client

func DbConfigure() {
	dbUrl := os.Getenv("NX_SEPHIRA_DB_URL")
	if dbUrl == "" {
		log.Fatal("DB URL not specified in env")
	}

	/*
		redisUrl := os.Getenv("NX_SEPHIRA_REDIS_URL")
		if redisUrl == "" {
			log.Fatal("Redis URL not specified in env")
		}
		redisPassword := os.Getenv("NX_SEPHIRA_REDIS_PASSWORD")
		if redisPassword == "" {
			log.Fatal("Redis password not specified in env")
		}
	*/

	var err error
	dbPool, err = pgxpool.Connect(context.Background(), dbUrl)
	if err != nil {
		log.Fatal("Error connecting to DB:", err)
	}
	/*
		redisClient = redis.NewClient(&redis.Options{
			Addr:     redisUrl,
			Password: redisPassword,
			DB:       0,
		})
	*/
}

func Postgres() (*pgxpool.Conn, error) {
	if dbPool == nil {
		return nil, errors.New("Postgres pool not created")
	}
	return dbPool.Acquire(context.Background())
}

/*
func Redis() *redis.Client {
	return redisClient
}
*/

func CloseDBs() {
	// defer redisClient.Close()
	defer dbPool.Close()
}
