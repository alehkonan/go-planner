FROM golang:1.20

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download && go mod verify

COPY . .

RUN go build -v -o /usr/local/bin/app/cmd/api .

EXPOSE 80

CMD [ "app" ]
