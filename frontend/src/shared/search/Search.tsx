import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import * as S from "./Styles";
import { useEffect, useState } from "react";

interface Props {
  handlerSearch(filter: string): void;
}

const SearchAppBar = (props: Props) => {
  const [search, setSearch] = useState<string>("");

  const handleSearchChange = (event: any) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    props.handlerSearch(search);
  }, [search]);

  return (
    <Box>
      <S.Search>
        <S.SearchIconWrapper>
          <SearchIcon />
        </S.SearchIconWrapper>
        <S.SearchInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          value={search}
          onChange={handleSearchChange}
        />
      </S.Search>
    </Box>
  );
};

export { SearchAppBar };
