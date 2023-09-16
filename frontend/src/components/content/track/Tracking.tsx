import { Box, Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { datas, results } from "../../../helper/interfaces";
import { getDocuments } from "../../../services/getDocuments";
import { HdbContext } from "../../../store/hdbCtx";
import * as S from "./Styles";

const Tracking = () => {
  const searcher = useContext(HdbContext);
  const [filter, setFilter] = useState<string>("");

  const { data, isLoading, isError } = useQuery<datas>({
    queryKey: ["documents", { filter }],
    queryFn: () => {
      return getDocuments(filter);
    },
  });

  useEffect(() => {
    setFilter(searcher.filter.search);
  }, [searcher.filter.search]);

  const renderCardContent = (todo: results) => (
    <CardContent sx={{ height: "18em" }}>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Project: {todo.title}
      </Typography>
      <Typography variant="h5" component="div"></Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Manager: {todo.author}
      </Typography>
      <Typography variant="body2">{todo.command}</Typography>
    </CardContent>
  );

  const renderGridItem = (todo: results) => (
    <Grid xs={6} md={4} key={todo.id}>
      <S.Papel>
        {"Friday 01 2023"}
        <Card>{renderCardContent(todo)}</Card>
      </S.Papel>
    </Grid>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {isError && <b>Fetching data error</b>}
        {!isLoading && data?.hits.map((todo: results) => renderGridItem(todo))}
      </Grid>
    </Box>
  );
};

export { Tracking };
