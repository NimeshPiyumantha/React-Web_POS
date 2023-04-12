import Box from "@mui/material/Box";
import Header from "../../component/Header/Header";
import { Grid, TextField, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
  },
});

export default function Customer() {
  return (
    <>
      <Header />
      <Box sx={{ width: "100%" }} mt={5}>
        <Grid container spacing={5} margin={3}>
          <Grid lg={3} md={3} sm={6} xs={12}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
