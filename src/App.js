import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

/**
 * 
 * @returns Controlled inputs and form submission
 */

function App() {



  const [formData, setFormData] = useState(
    {
    expense: "",
    amount: 0
  }
)

  const [expenses, setExpenses] = useState([])

    
  const handleSubmit = (event) => {
    event.preventDefault()

    // setExpenses([...expenses, {...formData}])

    setExpenses((prev)=> [...prev, {...formData}])

    console.log(expenses)

    
  }

  const handleOnChange = (event) => {

    setFormData(

      {
        ...formData,
        [event.target.name] : event.target.value,
      }
    )
  }

  

    
  return (
   <div className='container bg-warning py-1'>

    <div className='row'>

      <div className='col-4 border p-4'>
         <form onSubmit={handleSubmit}>
          <input name="expense" value={formData.expense} onChange={handleOnChange}  className="form-control form-control-sm my-1" type="text" placeholder="Expense name" aria-label=""/>
          <input name="amount" value={formData.amount} onChange={handleOnChange} className="form-control form-control-sm my-1" type="number" placeholder="Amount" aria-label=""/>
          <button type='submit' className='btn btn-sm btn-primary my-2'>Add Expense</button>
         </form>

      </div>
      <div className='col-8 border p-4'>
        Table
      </div>

    </div>

   </div>
  )
}

export default App;
