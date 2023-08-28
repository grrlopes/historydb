import { Outlet } from "react-router-dom";
import { DrawerHeader } from "../../shared/drawerheader/Styles";
import * as S from "./Styles";

interface Props {
  open?: boolean;
}

const Content = (props: Props) => {
  return (
    <S.Content open={props.open}>
      <DrawerHeader />

      <Outlet />
    </S.Content>
  );
};

export { Content };
