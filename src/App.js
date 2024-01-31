import React, { useState } from 'react'
import NewExpenses from './components/newExpenses/NewExpenses'
import Expenses from './components/exspenses/Expenses'


const productData =  [
  {
    title: 'Alma',
    price: 120,
    date: new Date(2021,5,11),
    id: '1',
  },
  {
    title: 'Car',
    price: 200000,
    date: new Date(2022,6,12),
    id: '2',
  },
  {
    title: 'Flower',
    price: 500,
    date: new Date(2023,7,13),
    id: '3',
  },
]


function App() {
  const [newProduct, setNewProduct] = useState(productData)
  
  const addNewExspensesHanddler = (data) => {
    setNewProduct([...newProduct, data])
  }


  const deleteExspenses = (id) => {
    const newData = newProduct.filter((el) => el.id !== id)
    setNewProduct(newData)
  }

  return <div className='App'>
    <NewExpenses onSubmit={addNewExspensesHanddler} />
    <Expenses data={newProduct} onDelete={deleteExspenses} />

  </div>

}

export default App