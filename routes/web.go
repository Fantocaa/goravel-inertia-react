package routes

import (
	"github.com/goravel/framework/contracts/http"
	"github.com/goravel/framework/contracts/route"
	"github.com/goravel/framework/support"
	inertia "github.com/romsar/gonertia/v3"

	"goravel/app/facades"
	"goravel/app/helpers"
	"goravel/app/http/controllers"
	"goravel/app/http/middleware"
)

func Web() {
	facades.Route().Middleware(middleware.Inertia()).Group(func(router route.Router) {
		router.Get("/", func(ctx http.Context) http.Response {
			return helpers.Inertia(ctx, "Welcome", inertia.Props{
				"version": support.Version,
			})
		})

		userController := controllers.NewUserController()
		router.Get("/users", userController.Index)
	})

	facades.Route().Static("build", "./public/build")
	facades.Route().Static("public", "./public")
}
