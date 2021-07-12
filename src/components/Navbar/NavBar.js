import React from 'react'
import styled,{css} from 'styled-components/macro'
import { Link as LinkR} from 'react-router-dom'
import { menuData } from '../../Data/MenuData';
import { Button } from '../Button/Button';


// const Nav = styled.div`
//     background: black;
//     height: 80px;
//     /* margin-top: -80px; */
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-size: 1rem;
//     position: sticky;
//     top: 0;
//     z-index: 10;

//     @media screen and (max-width: 960px){
//         transition: 0ms.8s all ease;
//     }
// `;

// const NavLogo = styled(LinkR)`
//     color: #fff;
//     justify-self: flex-start;
//     cursor: pointer;
//     font-size: 1.5rem;
//     display: flex;
//     align-items: center;
//     margin-left: 24px;
//     font-weight: bold;
//     text-decoration: none;
// `;
const Nav = styled.nav`
    height: 60px;
    background: black;
    display:flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index:100;
    position: fixed;
    width: 100%;   
`;

const NavLink = css`
    color:white;
    text-decoration: none;
    display:inline-flex;
    align-items:center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
`;

const NavLogo = styled(LinkR)`
   ${NavLink}
   font-size: 1.5rem;
   /* font-style: italic; */
`;

const NavMenu = styled.div`
    display:flex;
    align-items:center;
    margin-right:-48px;
    
    @media screen and (max-width:768px){
        display: none;
    }`;

const NavMenuLinks = styled(LinkR)`
    ${NavLink};
    /* background: black; */
    `;

const NavBtn = styled.div`
    display:flex;
    align-items:center;
    margin-right:24px;
    
    @media screen and (max-width:768px){
        display: none;
    }`




const NavBar = () => {
    return (
        <div>
            <Nav>
              
                    <NavLogo to='/'>
                        TOMORROWLAND<img src='../images/actualLogo.png' alt='logo'></img>
                    </NavLogo>
                         <NavMenu>
                        {menuData.map( (item, index) => (
                            <NavMenuLinks to={item.link} key={index}>
                                {item.title}
                            </NavMenuLinks>
                        ))}
                        </NavMenu>
                        <NavBtn>
                            <Button to='/tickets' primary = 'true'>Book tickets</Button>
                        </NavBtn>
               
            </Nav>
        </div>
    )
}

export default NavBar
