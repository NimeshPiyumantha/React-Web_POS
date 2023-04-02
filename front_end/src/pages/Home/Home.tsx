import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
    <Box sx={{ width: "100%" }} mt={5}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={3}>
          <Item>1</Item>
        </Grid>
        <Grid xs={3}>
          <Item>2</Item>
        </Grid>
        <Grid xs={3}>
          <Item>3</Item>
        </Grid>
        <Grid xs={3}>
          <Item>4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
