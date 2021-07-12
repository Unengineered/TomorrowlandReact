import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
    background: ${({ primary }) => (primary? 'transparent':'white')};
    white-space: nowrap;
    /* outline: 1px;
    outline-style: groove; */
    border: 1px solid white;
    min-width: 100px;
    font-family: 'Poppins';
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({big}) => (big? '16px 40px' : '14px 24px')};
    color: ${({primary}) => (primary? 'white' : 'black')};
    font-size: ${({big}) => (big? '20px' : '14px')}; ;

    &:hover{
        /* transform: translateY(-2px); */
        transition: all 0.3s ease-out;
        background: white;
        color: black;
        transition: 250ms;
    }

`;