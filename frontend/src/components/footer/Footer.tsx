import { Paginator } from "../pagination/Pagination";
import * as S from "./Styles";

interface Props {
  open?: boolean;
}

const Footer = (props: Props) => {
  return (
    <S.FooterBar
      position="fixed"
      open={props.open}
      sx={{
        top: "auto",
        bottom: 0,
        height: "36px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paginator />
    </S.FooterBar>
  );
};

export { Footer };
