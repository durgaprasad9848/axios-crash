import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import ExpenseDetails from "./ExpenseDetails.js";
import Card from "../UI/Card.js";
import React, { useState } from "react";

const ExpenseItem = (props) => {
 

  return (
    <div>
      <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date}></ExpenseDate>
      </div>

      <ExpenseDetails
        title={props.title}
        amount={props.amount}
      ></ExpenseDetails>

  
    </Card>

    </div>
    
  );
};

export default ExpenseItem;
