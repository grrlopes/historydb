import { Paper, styled } from "@mui/material";

const Papel = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  background: "blue",
}));

export { Papel };
