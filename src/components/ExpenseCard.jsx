import { Box, Button, IconButton } from "@mui/material";
import React from "react";

const ExpenseCard = ({ data, id, onDeleteClick }) => {
  const handleDelete = (id) => {
    onDeleteClick((c) => c.filter((data) => data.id !== id));
  };

  return (
    <div className="text-sm text-gray-200 w-full bg-gray-900 py-4 flex justify-between items-center px-4 rounded-lg">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="mr-4 bg-gray-600 border-2 border-gray-200 p-2 rounded-lg flex flex-col px-3">
          <h1 className="font-medium">
            {data.date.title.toLocaleString("en", { month: "long" })}
          </h1>
          <h1 className="font-medium">
            {data.date.title.toLocaleString("en", { weekday: "long" })}
          </h1>
          <h1 className="font-medium">{data.date.year}</h1>
        </div>
        <h1 className="font-bold text-lg">{data.title}</h1>
      </Box>

      <Box>
        <h1 className="p-2 bg-gray-600 font-medium shadow-sm rounded-lg border-2 border-gray-200 mb-2">
          ${data.amount}
        </h1>
        <Button variant="contained" onClick={() => handleDelete(id)}>
          Delete
        </Button>
      </Box>
    </div>
  );
};

export default ExpenseCard;
