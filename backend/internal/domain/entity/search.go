package entity

type pager struct {
	limit  int64
	offset int64
}

type Search struct {
	filter     string
	pagination pager
}

type SearchResponse struct {
	Data       []interface{} `json:"data"`
	TotalData  int64         `json:"TotalData,omitempty"`
	Offset     int64         `json:"offset,omitempty"`
	Limit      int64         `json:"limit,omitempty"`
	Page       int64         `json:"page,omitempty"`
	TotalPages int64         `json:"totalPages,omitempty"`
}
