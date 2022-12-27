import logo from "./logo.svg";
import "./App.css";

import ExpenceItem from "./Components/ExpenceItem";

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: 'Tenali',
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12),location: 'Hyderabad', },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: 'Vijawada',
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      location: 'Guntur',
    },
  ];


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Prasad Pulipati welcome back</p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <>{
           expenses.map((temp)=>{
            return(<ExpenceItem title = {temp.title}
            amount = {temp.amount}
            location = {temp.location}
            date = {temp.date}
            >

            </ExpenceItem>)


           })


        }
        </>
       


        
     
      </header>
    </div>
  );
}

export default App;



