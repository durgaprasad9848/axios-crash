import React,{useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {

    const[enteredTitle,setEnterdTitle] = useState('');
    const[enteredAmount,setEnterdAmount] = useState('');
    const[enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) =>
    {
        setEnterdTitle(event.target.value);
    };

    const amountChangeHandler = (event) =>
    {
        setEnterdAmount(event.target.value);
    };

    const dateChangeHandler = (event) =>
    {
        setEnteredDate(event.target.value);
    };




  const submitclick = (event) => {
    event.preventDefault();

    const expenseData = {
        title : enteredTitle,
        amount : enteredAmount,
        date : new Date(enteredDate)
    };
    console.log(expenseData);
  };




  return (
    <form onSubmit={submitclick}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" id ='iptitle' onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" id = "ipamount" onChange={amountChangeHandler}  />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2023-01-01" id = "ipdate" onChange={dateChangeHandler}  />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type = "submit" >Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
