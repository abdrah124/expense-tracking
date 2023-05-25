import { Box, Button, Grid } from "@mui/material";
import { useState } from "react";
import DatePicker from "./DatePicker";

const ExpenseAdd = ({ expenseData, setExpenseData }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenseData([
      ...expenseData,
      {
        title: title,
        amount: amount,
        date: {
          title: date.$d,
          month: date.$M,
          day: date.$D,
          year: date.$y,
        },
        id: crypto.randomUUID(),
      },
    ]);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <div className="add mx-auto p-4 bg-gray-800 text-gray-200 rounded-lg my-5 flex flex-col items-end">
      {open && (
        <div className="w-full bg-gray-50 mb-4 rounded-md py-4">
          <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
            <div className="grid grid-cols-2 px-2 place-items-start">
              <Input value={title} onChange={setTitle}>
                Title
              </Input>
              <Input value={amount} onChange={setAmount} trul={true}>
                Amount
              </Input>
              <DatePicker value={date} setValue={setDate} />
            </div>

            {open && (
              <Button
                type="submit"
                sx={{
                  width: "fit-content",
                  height: "fit-content",
                  marginTop: 2,
                  marginX: 2,
                  alignSelf: "end",
                }}
                variant="contained"
                disabled={!title || !amount || !date}
              >
                Add Expense
              </Button>
            )}
          </form>
        </div>
      )}
      <Box>
        <Button
          variant="contained"
          onClick={() => setOpen(!open)}
          sx={{ width: "fit-content" }}
        >
          {open ? "Cancel" : "Add Expense"}
        </Button>
      </Box>
    </div>
  );
};

const Input = ({ children, trul, placeholder, value, onChange }) => {
  return (
    <label className="flex flex-col mb-2 text-gray-800">
      <span className="w-fit text-sm font-medium mb-1">{children}</span>
      <input
        type={trul ? "number" : "text"}
        required
        className="border border-gray-700 w-11/12 rounded-md outline-none text-gray-800 px-2 py-1 placeholder:text-gray-900"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};

export default ExpenseAdd;
