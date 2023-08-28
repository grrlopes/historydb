import { Toolbar, Typography } from "@mui/material";
import * as S from "./Styles";

interface Props {
  open?: boolean;
}

const Footer = (props: Props) => {
  return (
    <S.FooterBar
      position="fixed"
      open={props.open}
      sx={{ top: "auto", bottom: 0, height: "20px"}}
    >
      <Toolbar />
    </S.FooterBar>
  );
};

export { Footer };
