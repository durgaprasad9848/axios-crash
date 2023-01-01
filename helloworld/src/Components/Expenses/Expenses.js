import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./NewExpenses/ExpensesFilter.js";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

   

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterdExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() == filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <>
          {filterdExpenses.map((temp) => {
            return (
              <ExpenseItem
                key={temp.id}
                title={temp.title}
                amount={temp.amount}
                location={temp.location}
                date={temp.date}
              ></ExpenseItem>
            );
          })}
        </>
      </Card>
    </div>
  );
};

export default Expenses;
