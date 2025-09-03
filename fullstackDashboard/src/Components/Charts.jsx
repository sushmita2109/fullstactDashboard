import React, { useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import { LineChart } from "@mui/x-charts/LineChart";
import Card from "@mui/material/Card";
import { ProductContext } from "../Context/ProductContext";

const Charts = () => {
  const { productDispatch, productState } = useContext(ProductContext);
  const lineData = () => {
    productDispatch({ type: "LINE_CHART" });
  };
  useEffect(() => {
    lineData();
  }, []);
  return (
    <div>
      <h1>Charts</h1>
      <Card>
        <Box sx={{ width: "100%", height: 300, bgcolor: "background.paper" }}>
          <LineChart
            xAxis={[
              { data: productState.allProducts.map((item) => item.price) },
            ]}
            series={[
              {
                data: productState.allProducts.map((item) => item.rating),
                area: true,
              },
            ]}
            height={300}
          />
        </Box>
      </Card>
    </div>
  );
};

export default Charts;
