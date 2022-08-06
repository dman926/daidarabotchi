package gorilla_websocket_manager

import (
	"testing"
)

func TestGorillaWebsocketManager(t *testing.T) {
	result := GorillaWebsocketManager("works")
	if result != "GorillaWebsocketManager works" {
		t.Error("Expected GorillaWebsocketManager to append 'works'")
	}
}
