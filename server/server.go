package main

import (
	"html"
	"net/http"

	"github.com/gorilla/mux"
)

func ReadPost(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)

	w.Write([]byte(html.EscapeString(vars["postId"])))
}

func main() {
	r := mux.NewRouter()

	r.HandleFunc("/api/posts/{postId}", ReadPost).Methods("GET")

	http.ListenAndServe(":80", r)
}
