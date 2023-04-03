import React from "react";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";

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

export default function Home() {
  return (
    <Box sx={{ width: "100%" }} mt={5}>
      <Grid container margin={3} rowSpacing={2} columnSpacing={3}>
        <Grid lg={3} md={3} sm={6} xs={12}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                bgcolor: "background.paper",
                boxShadow: 1,
                borderRadius: 2,
                p: 2,
                minWidth: 180,
              }}
            >
              <Box sx={{ color: "text.secondary" }}>Sessions</Box>
              <Box
                sx={{
                  color: "text.primary",
                  fontSize: 34,
                  fontWeight: "medium",
                }}
              >
                98.3 K
              </Box>
              <Box
                sx={{
                  color: "success.dark",
                  display: "inline",
                  fontWeight: "bold",
                  mx: 0.5,
                  fontSize: 14,
                }}
              >
                +18.77%
              </Box>
              <Box
                sx={{
                  color: "text.secondary",
                  display: "inline",
                  fontSize: 14,
                }}
              >
                vs. last week
              </Box>
            </Box>
          </ThemeProvider>
        </Grid>
      </Grid>
    </Box>
  );
}
