import { TablePagination } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { HdbContext } from "../../store/hdbCtx";

const Paginator = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const paginator = useContext(HdbContext);

  const hdbPagerCtx = (vPage: number, vRowPage: number) => {
    paginator?.setFilter({
      page: vPage,
      rowsPage: vRowPage,
    });
  };

  useEffect(() => {
    hdbPagerCtx(page, rowsPerPage);
  }, [page, rowsPerPage]);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  return (
    <TablePagination
      component="div"
      count={100}
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
