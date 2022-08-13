# syntax=docker/dockerfile:1

FROM golang:latest

WORKDIR /app

COPY ../../dist/apps/sephira-api ./

EXPOSE 5200

CMD [ "/app/sephira-api" ]