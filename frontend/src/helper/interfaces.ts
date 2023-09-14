interface results {
  id: number;
  author: string;
  title: string;
  description: string;
  command: string;
  created_at: any;
  updated_at: any;
}

interface datas {
  offset: number;
  limit: number;
  total: number;
  hits: [results];
  results: [results];
}

export type { datas, results };
