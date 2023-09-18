import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type HdbFilter = {
  search: string;
  page: number;
  rowsPage: number;
};

type HdbType = {
  filter: HdbFilter;
  setFilter: Dispatch<SetStateAction<HdbFilter>>;
};

type HdbContextProviderProps = {
  children: ReactNode;
};

const HdbContext = createContext<HdbType | any>("");

const HdbProvider = ({ children }: HdbContextProviderProps) => {
  const [filter, setFilter] = useState<HdbFilter>({
    search: "",
    page: 0,
    rowsPage: 0,
  });
  return (
    <HdbContext.Provider value={{ filter, setFilter }}>
      {children}
    </HdbContext.Provider>
  );
};

export { HdbContext, HdbProvider };
