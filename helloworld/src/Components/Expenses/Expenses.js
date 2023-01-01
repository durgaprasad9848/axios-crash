import React, { useState } from "react";

 
import Card from "../UI/Card";
import ExpensesFilter from "./NewExpenses/ExpensesFilter.js";
import "./Expenses.css";
import ExpenseList from "./NewExpenses/ExpenseList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterdExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

 


  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
         <ExpenseList items ={filterdExpenses}></ExpenseList>

         
         
         
      </Card>
    </li>
  );
};

export default Expenses;
