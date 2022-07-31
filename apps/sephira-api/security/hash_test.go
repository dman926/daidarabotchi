package security

import (
	"testing"

	"golang.org/x/crypto/bcrypt"
)

func TestHashPassword(t *testing.T) {
	password := "test"
	result, err := HashPassword(password)
	if err != nil {
		t.Error("Error encountered hashing password", err)
	}
	ok := bcrypt.CompareHashAndPassword([]byte(result), []byte(password))
	if ok != nil {
		t.Error("Generated incorrect hash")
	}
}

func TestCheckPassword(t *testing.T) {
	password := "test"
	result, err := bcrypt.GenerateFromPassword([]byte(password), 14)
	if err != nil {
		t.Error("Error generating password", err)
	}
	ok := CheckPassword(string(result), password)
	if ok != nil {
		t.Error("Password did not match")
	}
}
