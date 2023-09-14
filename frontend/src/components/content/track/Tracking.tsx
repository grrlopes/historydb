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

  const { data, isLoading, isError, error } = useQuery<datas>({
    queryKey: ["documents"],
    queryFn: () => {
      return getDocuments(filter);
    },
  });

  useEffect(() => {
    setFilter(searcher.filter.search);
  }, [searcher.filter.search]);

  if (isLoading) return <b>Loading</b>;
  if (isError) return `Error: ${error}`;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {data.hits.map((todo: results) => (
          <Grid xs={6} md={4}>
            <S.Papel key={todo.id}>
              {"Friday 01 2023"}
              <Card>
                <CardContent sx={{ height: "18em" }}>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Project: {todo.title}
                  </Typography>
                  <Typography variant="h5" component="div"></Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Manager: {todo.author}
                  </Typography>
                  <Typography variant="body2">{todo.command}</Typography>
                </CardContent>
              </Card>
            </S.Papel>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export { Tracking };
