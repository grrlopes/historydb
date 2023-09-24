export namespace meilisearch {
	
	export class SearchResponse {
	    hits: any[];
	    estimatedTotalHits?: number;
	    offset?: number;
	    limit?: number;
	    processingTimeMs: number;
	    query: string;
	    facetDistribution?: any;
	    totalHits?: number;
	    hitsPerPage?: number;
	    page?: number;
	    totalPages?: number;
	    facetStats?: any;
	    indexUid?: string;
	
	    static createFrom(source: any = {}) {
	        return new SearchResponse(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.hits = source["hits"];
	        this.estimatedTotalHits = source["estimatedTotalHits"];
	        this.offset = source["offset"];
	        this.limit = source["limit"];
	        this.processingTimeMs = source["processingTimeMs"];
	        this.query = source["query"];
	        this.facetDistribution = source["facetDistribution"];
	        this.totalHits = source["totalHits"];
	        this.hitsPerPage = source["hitsPerPage"];
	        this.page = source["page"];
	        this.totalPages = source["totalPages"];
	        this.facetStats = source["facetStats"];
	        this.indexUid = source["indexUid"];
	    }
	}

}

