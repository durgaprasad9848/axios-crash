import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import ExpenseDetails from "./ExpenseDetails.js";
import Card from "../UI/Card.js";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const[ amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    setTitle("prasad");
    setAmount('100$');
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date}></ExpenseDate>
      </div>

      <ExpenseDetails
        title={title}
        amount={amount}
      ></ExpenseDetails>

      <button onClick={clickHandler}>change title & amount</button>
    </Card>
  );
};

export default ExpenseItem;
