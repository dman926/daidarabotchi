package handlers

import (
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{}

func UserHandler(w http.ResponseWriter, r *http.Request) {
	ws, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println("User WS upgrade failed:", err)
		return
	}
	defer ws.Close()

	for {
		_, _, err := ws.ReadMessage()
		// messageType, message, err := ws.ReadMessage()
		if err != nil {
			log.Println("Error reading user ws stream:", err)
			break
		}
	}
}
