package config

import (
	"goravel/app/facades"
)

func init() {
	config := facades.Config()
	config.Add("inertia", map[string]any{
		// Inertia version for cache-busting assets.
		"version": config.Env("INERTIA_VERSION", "1.0.0"),
	})
}
