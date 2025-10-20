
import './App.css';
import { useState, useEffect } from 'react';
import Table from './components/Table';
import NavBar from './components/NavBar';



function App() {
<NavBar/>
  const [formData, setFormData] = useState(
    {
      expense: "",
      amount: 0
    }
  )

  const [expenses, setExpenses] = useState([])


  useEffect(function () {
    fetch("http://localhost:3001/expenses")
      .then((response) => response.json())
      .then(data => {
        setExpenses(data)

        console.log(data)
      })
  }, [])




  const handleSubmit = (event) => {
    event.preventDefault()

    const newExpense = {
      expense: formData.expense,
      amount: formData.amount
    };

  
    fetch("http://localhost:3001/expenses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newExpense),
    })
      .then((response) => response.json())
      .then((data) => {
        setExpenses((prev) => [...prev, data]);
        setFormData({ expense: "", amount: "" });
      })
      
  };





  const handleOnChange = (event) => {

    setFormData(

      {
        ...formData,
        [event.target.name]: event.target.value,
      }
    )
  }




  return (
    <div className='container mt-5'>

      <div className='row'>

        <div className='col-4 border p-4'>
          <form onSubmit={handleSubmit}>
            <input name="expense" value={formData.expense} onChange={handleOnChange} className="form-control form-control-sm my-1" type="text" placeholder="Expense name" aria-label="" />
            <input name="amount" value={formData.amount} onChange={handleOnChange} className="form-control form-control-sm my-1" type="number" placeholder="Amount" aria-label="" />
            <button type='submit' className='btn btn-sm btn-primary my-2'>Add Expense</button>
          </form>

        </div>
        <div className='col-8 border p-4'>

          <Table expenses={expenses} />

        </div>

      </div>

    </div>
  )
}

export default App;