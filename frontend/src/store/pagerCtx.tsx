import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type HdbPager = {
  page: number;
};

type HdbType = {
  pager: HdbPager;
  setPager: Dispatch<SetStateAction<HdbPager>>;
};

type HdbContextProviderProps = {
  children: ReactNode;
};

const HdbPagerContext = createContext<HdbType | any>("");

const HdbPagerProvider = ({ children }: HdbContextProviderProps) => {
  const [pager, setPager] = useState<HdbPager>({ page: 1 });
  return (
    <HdbPagerContext.Provider value={{ pager, setPager }}>
      {children}
    </HdbPagerContext.Provider>
  );
};

export { HdbPagerContext, HdbPagerProvider };
