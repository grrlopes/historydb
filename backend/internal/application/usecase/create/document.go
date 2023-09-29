package create

import (
	"github.com/grrlopes/historydb/backend/internal/domain/entity"
	"github.com/grrlopes/historydb/backend/internal/domain/repository"
)

type execute struct {
	CreateRepository repository.IMeilisearch
}

func NewCreate(repo repository.IMeilisearch) InputBoundary {
	return execute{
		CreateRepository: repo,
	}
}

func (e execute) Execute(data entity.CreateDocument) (entity.CreateResponse) {

	result := e.CreateRepository.Create(data)

	return result
}
