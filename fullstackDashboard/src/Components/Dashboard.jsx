import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ProductList from "./ProductList";
import SideBar from "./SideBar";
import TotalRevenues from "./TotalRevenues";
import Charts from "./Charts";
import Product from "./Product";
import Country from "./Country";

const theme = createTheme({
  status: {
    // danger: orange[500],
  },
});

const Dashboard = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <SideBar />
          </Grid>
          <Grid item xs={12} md={8}>
            <TotalRevenues />
            <ProductList />
            <Charts />
            <Grid container spacing={2} sx={{ mt: 4 }}>
              <Grid item xs={6}>
                <Product />
              </Grid>
              <Grid item xs={6}>
                <Country />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
