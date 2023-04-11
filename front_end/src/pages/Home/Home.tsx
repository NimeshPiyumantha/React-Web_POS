import { ThemeProvider, createTheme } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import SettingsIcon from "@mui/icons-material/Settings";
import Header from "../../component/Header/Header";

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
    <>
    <Header />
    <Box sx={{ width: "100%" }} mt={5}>
      <Grid container margin={3} rowSpacing={2} columnSpacing={3}>
        <Grid lg={3} md={3} sm={6} xs={12}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                bgcolor: "background.paper",
                boxShadow: 2,
                borderRadius: 2,
                p: 2,
                minWidth: 180,
              }}
            >
              <Box sx={{ color: "text.secondary" }}>Customer Count</Box>
              <Box
                id="txtCustomerCount"
                sx={{
                  color: "text.primary",
                  fontSize: 34,
                  fontWeight: "medium",
                }}
              >
                0
              </Box>
              <Box
                id="txtCustomerCountPracentage"
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
        <Grid lg={3} md={3} sm={6} xs={12}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                bgcolor: "background.paper",
                boxShadow: 2,
                borderRadius: 2,
                p: 2,
                minWidth: 180,
              }}
            >
              <Box sx={{ color: "text.secondary" }}>Item Count</Box>
              <Box
                id="txtItemsCount"
                sx={{
                  color: "text.primary",
                  fontSize: 34,
                  fontWeight: "medium",
                }}
              >
                0
              </Box>
              <Box
                id="txtItemsCountPracentage"
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
        <Grid lg={3} md={3} sm={6} xs={12}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                bgcolor: "background.paper",
                boxShadow: 2,
                borderRadius: 2,
                p: 2,
                minWidth: 180,
              }}
            >
              <Box sx={{ color: "text.secondary" }}>Order Count</Box>
              <Box
                id="txtOrderCount"
                sx={{
                  color: "text.primary",
                  fontSize: 34,
                  fontWeight: "medium",
                }}
              >
                0
              </Box>
              <Box
                id="txtOrderCountPracentage"
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
        <Grid lg={3} md={3} sm={6} xs={12}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                bgcolor: "background.paper",
                boxShadow: 2,
                borderRadius: 2,
                p: 2,
                minWidth: 180,
              }}
            >
              <Box sx={{ color: "text.secondary" }}>Order Count</Box>
              <SettingsIcon sx={{ fontSize: 34, padding: 1 }} />
            </Box>
          </ThemeProvider>
        </Grid>
      </Grid>
    </Box>
    </>
  );
}
