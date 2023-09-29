package create

import (
	"github.com/grrlopes/historydb/backend/internal/domain/entity"
)

type InputBoundary interface {
	Execute(data entity.Search) (*entity.SearchResponse, error)
}
