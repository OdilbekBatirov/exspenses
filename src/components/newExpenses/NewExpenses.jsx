import React, { useState } from 'react'
import Button from '../UI/Button'
import ExpensesForm from './ExpensesForm'
import styled from 'styled-components'


const NewExpenses = ({onSubmit}) => {
    const [state, setState] = useState(false)


    function openAndCLoseExspensesFormHandler() {
        setState((prev) => !prev)
    }
    return (<NewExpense>
        {state ? (
            <ExpensesForm onClick={openAndCLoseExspensesFormHandler} onSubmit={onSubmit} />
        ) : (
            <Button onClick={openAndCLoseExspensesFormHandler}>
                Добавить новый расход
            </Button>
        )}
    </NewExpense>)

}

export default NewExpenses  


const NewExpense = styled.div`
    background-color: #ad9be9;
    padding: 1rem;
    margin: 2rem auto;
    width: 48rem;
    max-width: 95%;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`