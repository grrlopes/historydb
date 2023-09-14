import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type HdbFilter = {
  search: string;
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
  const [filter, setFilter] = useState<HdbFilter>({ search: "" });
  return (
    <HdbContext.Provider value={{ filter, setFilter }}>
      {children}
    </HdbContext.Provider>
  );
};

export { HdbContext, HdbProvider };
