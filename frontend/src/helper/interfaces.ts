interface results {
  id: number;
  author: string;
  title: string;
  description: string;
  command: string;
  created_at: any;
  updated_at: any;
}

interface data {
  offset: number;
  limit: number;
  total: number;
  results: [results];
}

export type { data, results };
