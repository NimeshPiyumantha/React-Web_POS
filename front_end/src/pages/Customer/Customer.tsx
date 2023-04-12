import Box from "@mui/material/Box";
import Header from "../../component/Header/Header";
import { Grid, TextField, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      paper: "#ecf0f1",
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    }
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
            > <ThemeProvider theme={theme}>
            <Box
              sx={{
                bgcolor: "background.paper",
                boxShadow: 2,
                borderRadius: 2,
                p: 3,
                minWidth: 280,
              }}
            >
              <Box sx={{ color: "#ecf0f1",bgcolor:'#e74c3c',pt:1.5,pb:1.5,pr:2,pl:2,borderRadius: 2,textAlign:'center',fontWeight:'bold',fontFamily:'Poppines', fontSize: 20 }}>Search Customer</Box>
              <Box
                sx={{
                  mt:3,
                  color: "text.primary",
                  fontSize: 34,
                  fontWeight: "medium",
                  textAlign:'center'
                }}
              >
               <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
              </Box>
             
            </Box>
          </ThemeProvider>
              
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
