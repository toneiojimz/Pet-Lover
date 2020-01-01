import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const MyNav = styled.nav`
    display:flex;
    justify-content: space-around;
    align-items: center;
    min-height: 8vh;
    background: skyblue;
    color: black;
`;

const Links = styled.ul`
    width: 40%
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
   

`;

const Linked = styled.li`
    text-decoration: none;
`;


function Nav(){

    return(

        <MyNav>
            <Links>
                <Link to="/">
                    <Linked>Home</Linked>
                </Link>
                 <Link to="/dog">
                    <Linked>Dog</Linked>
                </Link>
                <Link to="cat">
                    <Linked>Cat</Linked>
                </Link>
            </Links>

        </MyNav>
    )
}
export default Nav;