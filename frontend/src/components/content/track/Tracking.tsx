import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import * as S from "./Styles";

const Tracking = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={6} md={4}>
          <S.Papel>
            {"Friday 01 2023"}
            <Card>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Project: Climatetrax
                </Typography>
                <Typography variant="h5" component="div">
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Manager: Jenna
                </Typography>
                <Typography variant="body2">
                  Date: Wed Feb 01 2023 14:31:32 GMT-0500 (Eastern Standard
                  Time)
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Note Message</Button>
              </CardActions>
            </Card>
          </S.Papel>
        </Grid>
        <Grid xs={6} md={4}>
          <S.Papel>
            {"Friday 02 2023"}
            <Card>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Project: Emmotion Tookit
                </Typography>
                <Typography variant="h5" component="div">
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Manager: Jenna
                </Typography>
                <Typography variant="body2">
                  Date: Thus Feb 02 2023 14:31:32 GMT-0500 (Eastern Standard
                  Time)
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Note Message</Button>
              </CardActions>
            </Card>
          </S.Papel>
        </Grid>
        <Grid xs={6} md={4}>
          <S.Papel>
            {"Friday 03 2023"}
            <Card>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Project: Climatetrax
                </Typography>
                <Typography variant="h5" component="div">
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Manager: Jenna
                </Typography>
                <Typography variant="body2">
                  Date: Fri Feb 03 2023 14:31:32 GMT-0500 (Eastern Standard
                  Time)
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Note Message</Button>
              </CardActions>
            </Card>
          </S.Papel>
        </Grid>

        <Grid xs={6} md={4}>
          <S.Papel>
            {"Friday 04 2023"}
            <Card>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Project: Climatetrax
                </Typography>
                <Typography variant="h5" component="div">
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Manager: Jenna
                </Typography>
                <Typography variant="body2">
                  Date: Fri Feb 04 2023 14:31:32 GMT-0500 (Eastern Standard
                  Time)
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Note Message</Button>
              </CardActions>
            </Card>
          </S.Papel>
        </Grid>
      </Grid>
    </Box>
  );
};

export { Tracking };
