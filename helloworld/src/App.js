import React,{useState} from 'react';

import NewExpense from "./Components/Expenses/NewExpenses/NewExpense.js";
import Expenses from './Components/Expenses/Expenses.js';

const DummyExpense = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


const App = () => {

    const[expenses,setExpense] = useState(DummyExpense);
 

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
    setExpense((prevExpense)=>[expense,...prevExpense]);
  };


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
       
    </div>
  );
}

export default App;