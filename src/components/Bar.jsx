import * as React from "react";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const VerticalLinearProgress = styled("div")({
  height: "100px",
  width: "10px",
  backgroundColor: "#e0e0e0",
  borderRadius: "5px",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const ProgressBar = styled("div")(({ value }) => ({
  height: `${value}%`,
  width: "100%",
  transition: ".3s",
  backgroundColor: "#1a90ff",
  borderRadius: "5px",
  position: "absolute",
  bottom: 0,
}));

export default function CustomizedProgressBars({
  month,
  index,
  expenseData,
  selectedYear,
}) {
  const selectedData = expenseData.filter((e) => {
    return e.date.title.getMonth() === index;
  });

  const selectedDataByYear = selectedData.filter((data) => {
    if (selectedYear) {
      return data.date.year === selectedYear;
    }
    return data;
  });

  const dataByYear = expenseData.filter((data) => {
    if (selectedYear) {
      return data.date.year === selectedYear;
    }
    return data;
  });

  // SELCTED YEAR FILTER
  const progressValue = Object.values(selectedDataByYear).reduce(
    (a, { amount }) => {
      return Number(a) + Number(amount);
    },
    0
  );

  const progressValue2 = Object.values(dataByYear).reduce((a, { amount }) => {
    return Number(a) + Number(amount);
  }, 0);

  const fixValue = parseFloat(progressValue / progressValue2);

  return (
    <VerticalLinearProgress>
      <ProgressBar value={fixValue * 100} variant="buffer" />
      <Typography
        variant="caption"
        component="h5"
        sx={{ position: "absolute", bottom: -22 }}
      >
        {month.slice(0, 3)}
      </Typography>
    </VerticalLinearProgress>
  );
}
