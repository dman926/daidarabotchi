package user

import (
	"log"
)

type UserServer struct {
	UnimplementedUserServiceServer
}

func NewServer() UserServer {
	return UserServer{}
}

func (s *UserServer) FetchUser(request *UserRequest, stream UserService_FetchUserServer) error {
	log.Printf("Username: %s | Passkey: %s\n", request.Username, request.Passkey)
	return nil
}
