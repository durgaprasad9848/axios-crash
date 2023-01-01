import "./App.css";
import Card from "./Components/UI/Card";
import NewExpense from "./Components/Expenses/NewExpenses/NewExpense.js";
import ExpenceItem from "./Components/Expenses/ExpenseItem.js";
import ExpensesFilter from "./Components/Expenses/NewExpenses/ExpensesFilter";
import React, { useState } from "react";

const DummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
    location: "Tenali",
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
    location: "Hyderabad",
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    location: "Vijawada",
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
    location: "Guntur",
  },
];


const App = () => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };


  
  const[expenses,setExpense] = useState(DummyExpenses);
  

  const addExpenseHandler = (expense) =>
  {
    console.log('in App.js');
    console.log(expense);

    //setExpense([expense,...expenses]);
    
    setExpense((prevExpense)=>{
      return([expense,...prevExpense]);
    });


  }

  return (
    <Card className='expenses'>
      <div className="App">
        <header className="App-header">
          <NewExpense onAddExpense = {addExpenseHandler}></NewExpense>
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

          <>
            {expenses.map((temp) => {
              return (
                <Card className='expenses'>
                  {" "}
                  <ExpenceItem
                    key = {temp.id}
                    title={temp.title}
                    amount={temp.amount}
                    location={temp.location}
                    date={temp.date}
                  ></ExpenceItem>
                </Card>
              );
            })}
          </>
        </header>
      </div>
    </Card>
  );
};

export default App;
