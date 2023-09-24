package search

import (
	"github.com/grrlopes/historydb/backend/internal/domain/entity"
	"github.com/grrlopes/historydb/backend/internal/domain/repository"
)

type execute struct {
	findRepository repository.IMeilisearch
}

func NewFinder(repo repository.IMeilisearch) InputBoundary {
	return execute{
		findRepository: repo,
	}
}

func (e execute) Execute(data entity.Search) (*entity.SearchResponse, error) {
	result, err := e.findRepository.FindAll(data)

	return result, err
}
