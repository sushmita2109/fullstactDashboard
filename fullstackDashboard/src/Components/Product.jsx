import React, { useContext } from "react";
import Card from "@mui/material/Card";
import { PieChart } from "@mui/x-charts/PieChart";
import { ProductContext } from "../Context/ProductContext";

const Product = () => {
  const { productState } = useContext(ProductContext);

  // Group stocks by category
  const categoryData = productState.allProducts.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = 0;
    }
    acc[item.category] += item.stock; // sum stocks for same category
    return acc;
  }, {});

  // Convert object into array for PieChart
  const chartData = Object.entries(categoryData).map(
    ([category, stock], index) => ({
      id: index,
      value: stock,
      label: category,
    })
  );

  return (
    <Card sx={{ width: "100%", height: 600, p: 3 }}>
      <h1>Product</h1>
      <PieChart
        series={[
          {
            data: chartData,
          },
        ]}
        width={400}
        height={400}
      />
    </Card>
  );
};

export default Product;
