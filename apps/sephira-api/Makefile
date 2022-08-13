MAIN_FILE=main.go
BINARY_NAME=sephira-api

all: build test

proto:
	protoc --go_out=. --go-grpc_out=. protos/*.proto

build:
	go build -o ../../dist/apps/${BINARY_NAME} ${MAIN_FILE}

test:
	go test -v ./...

run:
	go build -o ../../dist/apps/${BINARY_NAME} ${MAIN_FILE}
	./../../dist/apps/${BINARY_NAME}

clean:
	go clean
	rm ../../dist/apps/${BINARY_NAME}
