import React from 'react'
import ExpensesCard from './ExpensesCard'
import styled from 'styled-components'

const Expenses = (props) => {
    const { data } = props
    return (
        <Div>
            {data.map((el) => {
                return <ExpensesCard el={el} onDelete={props.onDelete} />
            })}
        </Div>
    )
}

export default Expenses


const Div = styled.div`
    background: #1f1f1f;
    margin: 2rem auto;
    width: 48rem;
    padding: 1rem;
    border-radius: 10px;
`