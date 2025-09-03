import React, { useContext, useEffect } from "react";
import { ProductContext } from "../Context/ProductContext";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const ProductList = () => {
  const { productState, fetchProductData } = useContext(ProductContext);

  useEffect(() => {
    fetchProductData();
  }, []);

  if (productState.error) return <p>Error: {productState.error}</p>;
  if (productState.loading) return <p>Loading...</p>;

  const products = productState.allProducts || [];

  const keys =
    products.length > 0
      ? Object.keys(products[0]).filter(
          (key) =>
            key !== "_id" &&
            key !== "createdAt" &&
            key !== "updatedAt" &&
            key !== "__v"
        )
      : [];

  return (
    <Box>
      <h1>Product List</h1>
      <Table>
        <TableHead>
          <TableRow>
            {keys.map((key) => (
              <TableCell key={key} style={{ fontWeight: "bold" }}>
                {key.toUpperCase()}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, index) => (
            <TableRow key={index}>
              {keys.map((key) => (
                <TableCell key={key}>{product[key]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default ProductList;
