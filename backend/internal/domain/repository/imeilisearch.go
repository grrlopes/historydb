package repository

import (
	"github.com/grrlopes/historydb/backend/internal/domain/entity"
)

type IMeilisearch interface {
	FindAll(data entity.Search) (*entity.SearchResponse, error)
  Create(data entity.CreateDocument) (entity.CreateResponse)
}
