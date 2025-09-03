import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ProductContext } from "../Context/ProductContext";

const Country = () => {
  const { productState } = useContext(ProductContext);

  // Group stock by country
  const countryStock = productState.allProducts.reduce((acc, product) => {
    const country = product.country || "Unknown"; // in case country is missing
    acc[country] = (acc[country] || 0) + product.stock;
    return acc;
  }, {});

  // Total stock for percentage calculation
  const totalStock = Object.values(countryStock).reduce(
    (sum, val) => sum + val,
    0
  );

  // Prepare rows with percentage
  const rows = Object.entries(countryStock).map(([country, stock]) => ({
    country,
    percentage: ((stock / totalStock) * 100).toFixed(2), // percentage
  }));

  return (
    <Card>
      <h1>Country</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400 }} aria-label="country table">
          <TableHead>
            <TableRow>
              <TableCell>Country</TableCell>
              <TableCell align="right">Total Stock (%)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.country}>
                <TableCell component="th" scope="row">
                  {row.country}
                </TableCell>
                <TableCell align="right">{row.percentage}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default Country;
