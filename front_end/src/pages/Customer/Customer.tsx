import Box from "@mui/material/Box";
import Header from "../../component/Header/Header";
import {
  Button,
  Grid,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";

function createData(id: string, name: string, address: string, salary: number) {
  return { id, name, address, salary };
}

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
    },
  },
});

export default function Customer() {
  return (
    <>
      <Header />
      <Box sx={{ width: "100%", mt: 3 }}>
        <Grid container gap={7} justifyContent={"center"}>
          {/* Search & Manage Section */}
          <Grid lg={5} md={5} sm={10} xs={11}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
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
                      id="btnSaveCustomer"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "0.8rem",
                      }}
                    >
                      + New
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      id="btnUpdateCustomer"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "0.8rem",
                      }}
                    >
                      Update
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      id="btnDeleteCustomer"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "0.8rem",
                      }}
                    >
                      Delete
                    </Button>
                  </Box>
                </Box>
              </ThemeProvider>
            </Box>
          </Grid>

          {/* Text Section */}
          <Grid lg={5} md={5} sm={10} xs={11}>
            <ThemeProvider theme={theme}>
              <Box
                sx={{
                  bgcolor: "background.paper",
                  boxShadow: 2,
                  borderRadius: 2,
                  p: 2,
                  width: "70%",
                }}
              >
                <Box
                  component="form"
                  action="customer"
                  id="customerForm"
                  sx={{
                    "& .MuiTextField-root": { width: "95%", m: 2 },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    sx={{
                      fontSize: 22,
                      fontWeight: "bold",
                      fontFamily: "Poppines",
                    }}
                    id="txtCusId"
                    name="id"
                    label="Customer ID "
                    placeholder="C00-001"
                    InputProps={{
                      readOnly: true,
                    }}
                    size="small"
                  />

                  <TextField
                    sx={{
                      fontSize: 22,
                      fontWeight: "bold",
                      fontFamily: "Poppines",
                    }}
                    id="txtCusName"
                    name="name"
                    label="Customer Name :"
                    placeholder="Nimesh"
                    required
                    size="small"
                  />

                  <TextField
                    sx={{
                      fontSize: 22,
                      fontWeight: "bold",
                      fontFamily: "Poppines",
                    }}
                    id="txtCusAddress"
                    name="address"
                    label="Customer Address "
                    placeholder="Galle"
                    required
                    size="small"
                  />

                  <TextField
                    sx={{
                      fontSize: 22,
                      fontWeight: "bold",
                      fontFamily: "Poppines",
                    }}
                    id="txtCustomerSalary"
                    name="salary"
                    label="Customer Salary "
                    placeholder="80000"
                    required
                    size="small"
                  />
                </Box>
              </Box>
            </ThemeProvider>
          </Grid>
        </Grid>

        <Grid container justifyContent={"center"}>
          {/* Table Section */}
          <Grid lg={5} md={5} sm={10} xs={11}></Grid>
        </Grid>
      </Box>
    </>
  );
}
