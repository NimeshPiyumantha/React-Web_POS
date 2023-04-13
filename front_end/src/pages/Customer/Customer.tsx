import Box from "@mui/material/Box";
import Header from "../../component/Header/Header";
import {
  Button,
  Grid,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { yellow } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: yellow[600],
    },
    background: {
      paper: "#ecf0f1",
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
      <Box sx={{ width: "100%" }} mt={5} margin={1}>
        <Grid container mt={3}>
          <Grid lg={5} md={5} sm={10} xs={11}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              {" "}
              <ThemeProvider theme={theme}>
                <Box
                  sx={{
                    bgcolor: "background.paper",
                    boxShadow: 2,
                    borderRadius: 2,
                  }}
                >
                  <Box
                    sx={{
                      color: "#ecf0f1",
                      bgcolor: "#e74c3c",
                      pt: 1.5,
                      pb: 1.5,
                      pr: 2,
                      pl: 2,
                      borderRadius: 2,
                      textAlign: "center",
                      fontWeight: "bold",
                      fontFamily: "Poppines",
                      fontSize: 22,
                    }}
                  >
                    Manage Customer
                  </Box>
                  <Box
                    sx={{
                      color: "#2c3e50",
                      pt: 1.5,
                      pr: 2,
                      pl: 2,
                      borderRadius: 2,
                      fontWeight: "bold",
                      fontFamily: "Poppines",
                      fontSize: 18,
                    }}
                  >
                    Search Customer :
                  </Box>
                  <Box
                    sx={{
                      color: "text.primary",
                      mt: 1.5,
                      mr: 2,
                      ml: 2,
                    }}
                  >
                    <TextField
                      sx={{
                        width: 10 / 10,
                        fontSize: 20,
                        fontWeight: "bold",
                        fontFamily: "Poppines",
                      }}
                      id="searchCusId"
                      label="Input Name/NIC/Tp Here"
                      variant="outlined"
                    />
                  </Box>
                  <Box
                    sx={{
                      color: "#2c3e50",
                      gap: 2,
                      mr: 2,
                      ml: 2,
                      p: 2,
                      "& button": { m: 1 },
                    }}
                  >
                    <Button
                      variant="contained"
                      color="success"
                      size="medium"
                      id="btnSaveCustomer"
                      sx={{
                        fontWeight: "bold",
                        fontSize: 16,
                      }}
                    >
                      + New
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      size="medium"
                      id="btnUpdateCustomer"
                      sx={{
                        fontWeight: "bold",
                        fontSize: 16,
                      }}
                    >
                      Update
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      size="medium"
                      id="btnDeleteCustomer"
                      sx={{
                        fontWeight: "bold",
                        fontSize: 16,
                      }}
                    >
                     Delete
                    </Button>
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
