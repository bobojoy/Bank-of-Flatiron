import { useState, useEffect } from "react";
import "./App.css";
import Search from "./Components/Search";
import Table from "./Components/Table";
import Form from "./Components/Form";
function App() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: "20/02/2024",
      description: "Sunglasses",
      category: "Fashion",
      amount: "$20",
    },
    {
      id: 2,
      date: "25/02/2024",
      description: "Birthday",
      category: "Shopping",
      amount: "$500",
    },
  ]);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="container">
      <div>
        {" "}
        <h1>The Royal Bank Of Flatiron </h1>{" "}
      </div>
      <Search transactions={transactions} setTransactions={setTransactions} />
      <Form transactions={transactions} setTransactions={setTransactions} />
      <Table transactions={transactions} setTransactions={setTransactions} />
    </div>
  );
}

export default App;
