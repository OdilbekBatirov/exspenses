import React, { useState } from 'react'
import Input from '../UI/Input'
import Button from '../UI/Button'
import styled from 'styled-components'

const ExpensesForm = ({ onClick, onSubmit }) => {
  const [inputText, setInputText] = useState('')
  const [inputNumber, setInputNumber] = useState(0)
  const [inputDate, setInputDate] = useState(null)

  const getInputTextValue = (e) => {
    setInputText(e.target.value)
  }

  const getInputNumberValue = (e) => {
    setInputNumber(e.target.value)
  }

  const getInputDateValue = (e) => {
    setInputDate(e.target.value)
  }


  const submitHandler = () => {
    const product = {
      title: inputText,
      price: inputNumber,
      deta: inputDate,
    }
    onSubmit(product)

    setInputText('')
    setInputNumber('')
    setInputDate('')
  }

  return (
    <form>
      <ExpenseFormInput>
        <Input type="text" placeholder="Заголовок" children="Заголовок" value={inputText} onChange={getInputTextValue} />
        <Input type="number" placeholder="Количество" children="Количество" value={inputNumber} onChange={getInputNumberValue} />
        <Input type="date" placeholder="Датировать" children="Датировать" value={inputDate} onChange={getInputDateValue} />
        <ButtonClass>
          <Button onClick={onClick} marginRight='15px' >Отмена</Button>
          <Button onClick={submitHandler}>Добавить расходы</Button>
        </ButtonClass>
      </ExpenseFormInput>
    </form>
  )
}

export default ExpensesForm


const ExpenseFormInput = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
    text-align: left;
`

const ButtonClass = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
`