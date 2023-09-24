import { Box, Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useContext, useEffect, useState } from "react";
import { results } from "../../../helper/interfaces";
import { HdbContext, HdbType } from "../../../store/hdbCtx";
import * as S from "./Styles";
import { Greet } from "../../../../wailsjs/go/cmd/App";
import { meilisearch } from "../../../../wailsjs/go/models";

const Tracking = () => {
  const searcher = useContext<HdbType>(HdbContext);
  const limit = searcher.pager.limit;
  const offset = searcher.pager.offset;
  const [filter, setFilter] = useState<string>("");
  const [data, setData] = useState<meilisearch.SearchResponse>();

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
    (async () => {
      const result = await Greet(filter, limit, offset);
      setData(result);
    })();
  }, [searcher.filter.search, filter]);

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
        {data?.hits.map((todo: results) => renderGridItem(todo))}
      </Grid>
    </Box>
  );
};

export { Tracking };
