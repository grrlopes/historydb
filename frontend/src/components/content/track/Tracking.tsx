import { Box, Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useQuery } from "@tanstack/react-query";
import { data, results } from "../../../helper/interfaces";
import { getDatas } from "../../../services/getDatas";
import * as S from "./Styles";

const Tracking = () => {
  const { isLoading, isError, error, data } = useQuery<data>({
    queryKey: ["posts"],
    queryFn: getDatas,
  });

  if (isLoading) return "Loading";
  if (isError) return `Error: ${error}`;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {data.results.map((todo: results) => (
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
