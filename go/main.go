package main

import (
	"com2kids/go/schoolAssets"
	"net/http"

	"github.com/julienschmidt/httprouter"
	"github.com/rs/cors"
)

func main() {
	router := httprouter.New()
	router.GET("/schools", schoolAssets.SchoolIndex)
	router.GET("/schools/:schoolID", schoolAssets.SchoolShow)
	router.GET("/school-sizes", schoolAssets.SchoolGetSizeList)
	router.GET("/school-provinces", schoolAssets.SchoolGetProvinceList)
	router.GET("/assets", schoolAssets.AssetsIndex)
	http.ListenAndServe(":3001", cors.Default().Handler(router))
}
