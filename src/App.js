import "./App.css";
import Table from "./Components/Table";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Search from "./Components/Search";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5000/transactions");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  function handleSearch(e) {
    setSearchData(e.target.value);
  }

  const newData = data.filter((transaction) => {
    if (searchData.length > 0) {
      return transaction.description
        .toLowerCase()
        .includes(searchData.toLowerCase());
    } else {
      return true;
    }
  });

  async function handleNewData(formData) {
    try {
      const response = await fetch("http://localhost:5000/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const newTransaction = await response.json();
      setData([...data, newTransaction]);
    } catch (error) {
      console.error("Error adding data:", error);
    }
  }

  return (
    <div className="container">
      <Header />
      <Search searchBar={handleSearch} />
      <Form handleNewData={handleNewData} />
      <Table transaction={newData} />
    </div>
  );
}

export default App;
