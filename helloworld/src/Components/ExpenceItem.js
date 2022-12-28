import './ExpenceItem.css';
 
import ExpenseDate from './ExpenceDate.js';
import ExpenseDetails from './ExpenseDetails.js';

function ExpenceItem(props) {
  
 
 
  return (
    <div className = "expense-item">
        <div>
        <ExpenseDate date = {props.date}></ExpenseDate>
        </div>
       
        <ExpenseDetails title = {props.title} amount = {props.amount}></ExpenseDetails>
       
    </div>);
}

export default ExpenceItem;
