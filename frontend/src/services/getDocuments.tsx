import { data } from "../helper/interfaces";
import { requestInfo } from "./requestInfo";

const getDocuments = async (search: string): Promise<data> => {
  const data = await fetch(
    `http://localhost:7700/indexes/historydb/search?q=${search}`,
    requestInfo("GET")
  );
  return data.json();
};

export { getDocuments };
