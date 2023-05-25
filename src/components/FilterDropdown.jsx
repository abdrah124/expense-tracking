import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectSmall({ expenseData, setSelectedYear }) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const filterByYear = new Set([
    ...expenseData
      .slice()
      .sort((a, b) => a.date.year - b.date.year)
      .map((e) => e.date.year),
  ]);

  return (
    <FormControl
      sx={{
        m: 1,
        minWidth: 120,
        color: "white",
      }}
      size="small"
    >
      <InputLabel id="demo-select-small-label" sx={{ color: "white" }}>
        Year
      </InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
        sx={{ color: "white" }}
      >
        <MenuItem value={4} onClick={() => setSelectedYear(null)}>
          All
        </MenuItem>
        {expenseData.length > 0 &&
          Array.from(filterByYear).map((e) => (
            <MenuItem key={e} onClick={() => setSelectedYear(e)} value={e}>
              {e}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}
