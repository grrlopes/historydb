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

type HdbCounter = {
  counter: number;
};

type HdbPager = {
  limit: number;
  offset: number;
};

export type HdbType = {
  filter: HdbFilter;
  setFilter: Dispatch<SetStateAction<HdbFilter>>;
  pager: HdbPager;
  setPager: Dispatch<SetStateAction<HdbPager>>;
  total: HdbCounter;
  setTotal: Dispatch<SetStateAction<HdbCounter>>;
};

type HdbContextProviderProps = {
  children: ReactNode;
};

const HdbContext = createContext<HdbType | any>("");

const HdbProvider = ({ children }: HdbContextProviderProps) => {
  const [filter, setFilter] = useState<HdbFilter>({ search: "" });
  const [pager, setPager] = useState<HdbPager>({
    limit: 0,
    offset: 0,
  });
  const [total, setTotal] = useState<HdbCounter>({ counter: 0 });
  return (
    <HdbContext.Provider
      value={{ filter, setFilter, pager, setPager, total, setTotal }}
    >
      {children}
    </HdbContext.Provider>
  );
};

export { HdbContext, HdbProvider };
