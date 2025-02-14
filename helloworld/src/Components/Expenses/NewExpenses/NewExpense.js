import React,{useState} from "react";
import ExpenseForm from './ExpenseForm'
import './NewExpense.css';

const NewExpense = (props) =>
{

    const[isEditing,setIsEditing]=useState(false);
    const saveExpenseDataHandler = (enterdExpenseData) => 
    {
        const expenseData = {
            ...enterdExpenseData,
            id : Math.random().toString()
        }
       // console.log(expenseData);
       props.onAddExpense(expenseData);
    }
    const startEditingHandler = () =>{
        setIsEditing(true);
    }

    const stopEditingHandler = () =>{
        setIsEditing(false);
    }
        
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Element</button>}
            {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel = {stopEditingHandler}></ExpenseForm>}
        </div>
    );


}

export default NewExpense;