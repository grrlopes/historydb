import { TablePagination } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { HdbContext, HdbType } from "../../store/hdbCtx";

const Paginator = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const paginator = useContext<HdbType>(HdbContext);

  const hdbPagerCtx = (offset: number, vRowPage: number) => {
    paginator?.setPager({
      limit: vRowPage,
      offset: offset,
    });
  };

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  useEffect(() => {
    hdbPagerCtx(page, rowsPerPage);
  }, [page, rowsPerPage]);

  return (
    <TablePagination
      component="div"
      count={paginator.total.counter}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      size="small"
      sx={{ overflowY: "hidden" }}
    />
  );
};

export { Paginator };
