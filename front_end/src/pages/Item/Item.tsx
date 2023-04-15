import { Box, Button, Grid, TextField, ThemeProvider, createTheme } from "@mui/material";
import Header from "../../component/Header";
import { theme } from "../../component/Them/Them";

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
    
     
       
                </Box>
              </ThemeProvider>
            </Box>
          </Grid>

         
        </Grid>

       
      </Box>
    </>
  );
}
