import CardContent from "@mui/material/CardContent";
import React, { useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { ProductContext } from "../Context/ProductContext";

const TotalRevenues = () => {
  const { productDispatch, productState } = useContext(ProductContext);
  const generateTotal = () => {
    productDispatch({ type: "GENERATE_TOTAL" });
  };
  useEffect(() => {
    generateTotal();
  }, []);
  return (
    <div>
      <h1>TotalRevenue</h1>
      <Box sx={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
        {productState.grandTotal.map((item) => (
          <Card
            key={item.name}
            sx={{ minWidth: 275, margin: "10px", padding: "10px" }}
          >
            <CardContent>
              <h3>{item.name}</h3>
              <h2>{item.number}</h2>
            </CardContent>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default TotalRevenues;
