import { useEffect, useState } from "react";
import Container from "./components/Container";
import BarLayout from "./components/BarLayout";
import { months } from "./data.js";
import Bar from "./components/Bar";
import ExpenseAdd from "./components/ExpenseAdd";
import ItemList from "./components/ItemList";
import ExpenseCard from "./components/ExpenseCard";
import { Box, Button } from "@mui/material";
import FilterDropdown from "./components/FilterDropdown";

const App = () => {
  const [expenseData, setExpenseData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);

  useEffect(() => {
    localStorage.setItem("expenseData", JSON.stringify(expenseData));
  }, [expenseData]);

  useEffect(() => {
    const storedExpenseData = localStorage.getItem("expenseData");
    if (storedExpenseData) {
      try {
        const parsedData = JSON.parse(storedExpenseData);
        setExpenseData(parsedData);
      } catch (err) {
        console.error(`Error parsing data from localStorage ${err.message}`);
      }
    }
  }, []);

  return (
    <Container>
      <ExpenseAdd expenseData={expenseData} setExpenseData={setExpenseData} />
      <Box
        sx={{
          paddingTop: 2,
          display: "flex",
          justifyContent: "end",
          paddingX: 2,
          width: "100%",
          backgroundColor: "#1E293b",
          borderRadius: "10px 10px 0 0",
        }}
      >
        <FilterDropdown
          expenseData={expenseData}
          setSelectedYear={setSelectedYear}
        />
      </Box>
      <BarLayout>
        {months.map((month, index) => (
          <Bar
            key={month}
            index={index}
            month={month}
            expenseData={expenseData}
            selectedYear={selectedYear}
          />
        ))}
      </BarLayout>
      <ItemList>
        {expenseData.length > 0 &&
          sortDate(
            expenseData.slice().filter((e) => {
              if (selectedYear) {
                return e.date.year === selectedYear;
              }
              return e;
            })
          ).map((expense) => {
            return (
              <ExpenseCard
                key={expense.id}
                id={expense.id}
                onDeleteClick={setExpenseData}
                data={expense}
              />
            );
          })}
      </ItemList>
    </Container>
  );
};

export default App;

const sortDate = (array) => {
  return array
    .sort((a, b) => a.date.year - b.date.year)
    .sort((a, b) => a.date.day - b.date.day)
    .sort((a, b) => a.date.month - b.date.month);
};
