import React from 'react';
import './ExpenseList.css';
import ExpenseItem from '../ExpenseItem';

const ExpenseList = (props) =>{

   // let expenseContent = <p>No expense found.</p>;
   if (props.items.length === 0) {
      
    return (<h2 className='expenses-list'>No Element Found</h2>);
  }
   

  if (props.items.length === 1) {
      
    return(  
        <ul className='"expenses-list'>
        {props.items.map((temp) => {
                return( 
                <ExpenseItem
                  key={temp.id}
                  title={temp.title}
                  amount={temp.amount}
                  location={temp.location}
                  date={temp.date}
                  
                />
                
                
            );
            })
            
        }
        <h3 className='expense-list__fallback'>
        Only single Expense here. Please add more...
         </h3>
         ;
         </ul>
 
         );
  }
    
    
    return(  
        <ul className='"expenses-list'>
        {props.items.map((temp) => {
                return( 
                <ExpenseItem
                  key={temp.id}
                  title={temp.title}
                  amount={temp.amount}
                  location={temp.location}
                  date={temp.date}
                  
                />
                
                
            );
            })
            
        }
         </ul>
 
         );

         

}

export default ExpenseList;