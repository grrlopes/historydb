import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import * as S from "./Styles";

const SearchAppBar = () => {
  return (
    <Box>
      <S.Search>
        <S.SearchIconWrapper>
          <SearchIcon />
        </S.SearchIconWrapper>
        <S.StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </S.Search>
    </Box>
  );
};

export { SearchAppBar };
