import { Box, Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { datas, results } from "../../../helper/interfaces";
import { getDocuments } from "../../../services/getDocuments";
import { HdbContext, HdbType } from "../../../store/hdbCtx";
import * as S from "./Styles";

const Tracking = () => {
  const searcher = useContext<HdbType>(HdbContext);
  const limit = searcher.pager.limit;
  const offset = searcher.pager.offset;
  const [filter, setFilter] = useState<string>("");

  const { data, isLoading, isError } = useQuery<datas>({
    queryKey: ["documents", { filter, limit, offset }],
    queryFn: () => {
      return getDocuments(filter, limit, offset);
    },
  });

  const counter = () => {
    if (data?.estimatedTotalHits) {
      searcher?.setTotal({
        counter: data?.estimatedTotalHits,
      });
    }
  };

  useEffect(() => {
    setFilter(searcher.filter.search);
    counter();
  }, [searcher.filter.search, data?.estimatedTotalHits]);

  const renderCardContent = (todo: results) => (
    <CardContent sx={{ height: "16em" }}>
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
