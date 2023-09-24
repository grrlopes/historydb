import { datas } from "../helper/interfaces";
import { requestInfo } from "./requestInfo";

const dataa = {
  hits: [
    {
      id: 3,
      author: "bbbb",
      title: "bbbbb",
      description: "mmmmmm",
      command:
        "1.10.32 Contrary to popular belief, Lorem Ipsum is not simply random text.",
      created_at: "",
      updated_at: "",
      revision: [
        {
          id: 1,
          author: "Gabriel",
          command: "badfd",
          created_at: "",
        },
      ],
    },
  ],
  query: "",
  processingTimeMs: 0,
  limit: 1,
  offset: 0,
  estimatedTotalHits: 13,
};

const helder = ()=>{}

const getDocuments = async (
  search: string,
  limit: number,
  offset: number
): Promise<datas> => {
  const data = await fetch(
    `http://localhost:7700/indexes/historydb/search?q=${search}&limit=${limit}&offset=${offset}`,
    requestInfo("GET")
  );
  return data.json();
};

const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

export { fetchUsers, getDocuments };
