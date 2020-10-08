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
    text-decoration: none;
`;

const Links = styled.div`
    width: 40%
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    text-decoration: none;
   

`;




function Nav(){

    return(

        <MyNav>
            <Links>
                <Link style={{ textDecoration: 'none' }} to="/"><a>HOME</a></Link>
                <Link style={{ textDecoration: 'none' }} to="/dog"><a>DOG</a></Link>
                <Link style={{ textDecoration: 'none' }} to="cat"><a>CAT</a></Link>
                    
                    
                    
                
            </Links>

        </MyNav>
    )
}
export default Nav;