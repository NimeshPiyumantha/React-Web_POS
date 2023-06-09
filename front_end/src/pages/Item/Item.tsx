import {
  Box,
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  ThemeProvider,
} from "@mui/material";
import Header from "../../component/Header";
import { StyledTableCell, theme } from "../../component/Them/Them";

function createData(code: string, name: string, qty: number, price: number) {
  return { code, name, qty, price };
}

const rows = [
  createData("I00-001", "Bun", 100, 80),
  createData("I00-002", "Bun", 100, 80),
  createData("I00-003", "Bun", 100, 80),
  createData("I00-004", "Bun", 100, 80),
];

export default function Item() {
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
                    Manage Item
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
                    Search Item :
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
                      id="ItemIdSearch"
                      label="Input Name/Code/Tp Here"
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
                      id="btnAddItem"
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
                      id="btnUpdateItem"
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
                      id="btnDeleteItem"
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
                  action="item"
                  id="itemForm"
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
                    id="txtItemID"
                    name="code"
                    label="Item Code "
                    placeholder="I00-001"
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
                    id="txtItemName"
                    name="description"
                    label="Item Name :"
                    placeholder="Bun"
                    required
                    size="small"
                  />

                  <TextField
                    sx={{
                      fontSize: 22,
                      fontWeight: "bold",
                      fontFamily: "Poppines",
                    }}
                    id="txtItemQty"
                    name="qty"
                    label="QTY on Hand "
                    placeholder="100"
                    required
                    size="small"
                  />

                  <TextField
                    sx={{
                      fontSize: 22,
                      fontWeight: "bold",
                      fontFamily: "Poppines",
                    }}
                    id="txtItemPrice"
                    name="unitPrice"
                    label="Unit Price "
                    placeholder="80"
                    required
                    size="small"
                  />
                </Box>
              </Box>
            </ThemeProvider>
          </Grid>
        </Grid>

        <Grid container p={8} justifyContent={"center"}>
          {/* Table Section */}
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="right">Item Code</StyledTableCell>
                  <StyledTableCell align="right">Item Name</StyledTableCell>
                  <StyledTableCell align="right">Item QTY</StyledTableCell>
                  <StyledTableCell align="right">
                    Item Price&nbsp;(Rs)
                  </StyledTableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.code}>
                    <StyledTableCell align="right">{row.code}</StyledTableCell>
                    <StyledTableCell align="right">{row.name}</StyledTableCell>
                    <StyledTableCell align="right">{row.qty}</StyledTableCell>
                    <StyledTableCell align="right">{row.price}</StyledTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Box>
    </>
  );
}
