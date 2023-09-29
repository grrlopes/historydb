package entity

type CreateDocument struct {
	Data []map[string]interface{}
}

type CreateResponse struct {
	Id      int64  `json:"id,omitempty"`
	Message string `json:"message,omitempty"`
}
