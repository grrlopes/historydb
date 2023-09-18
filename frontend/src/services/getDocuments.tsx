import { datas } from "../helper/interfaces";
import { requestInfo } from "./requestInfo";

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

export { getDocuments };
