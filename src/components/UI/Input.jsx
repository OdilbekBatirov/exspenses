import React from 'react'
import './Input.css'
import styled from 'styled-components'

const input = (props) => {
    return (
        <div>
            <Label htmlFor={props.id}>{props.children}</Label>
            <Input type={props.type} id={props.id} placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}

export default input

const Label = styled.label`
    font-size: large;
   font-family: Georgia, 'Times New Roman', Times, serif;
   font-weight: bold;
   margin-left: 16px;
`

const Input = styled.input`
    width: 340px;
   height: 39px;
   border-radius: 8px;
   border-color: #ad9be9;
`