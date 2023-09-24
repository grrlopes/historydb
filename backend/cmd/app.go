package cmd

import (
	"context"
	"fmt"
	"os"

	"github.com/meilisearch/meilisearch-go"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) Startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(search string, limit, offset int64) *meilisearch.SearchResponse {
	client := meilisearch.NewClient(meilisearch.ClientConfig{
		Host: "http://localhost:7700",
	})
	fmt.Println(limit, offset)
	searchRes, err := client.Index("historydb").Search(search,
		&meilisearch.SearchRequest{
			Limit:  limit,
			Offset: offset,
		})
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}

	return searchRes
}
