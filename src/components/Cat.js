import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {Link } from 'react-router-dom';

const H2= styled.h2`
 text-align: center;
 margin-top: 30px;
 font-size: 4rem;
`;

const CatImg = styled.img`
    display:flex;
    max-width: 600px;
    max-height: 450px;
    padding: 20px;
`;
const Imgdiv= styled.div`
    display: flex;
    justify-content:center;
    max-width: 100vh;
    max-height: 100vh;
`;

const CatPage=styled.div`
    background-color: #C2E7DA;
    height: 100vh;
    margin-top:-20px;
    display:flex;
    flex-direction column;
    align-items: center;
`;

const Button= styled.button`
    display: flex;
    justify-content:center;
    align-items: center;
    background-color:orange;
    font-size: 2rem;
    border-radius:7px;
`;


function Cat(){
   
    const [cat, setCat]= useState({});

    useEffect (() => {

        axios
            .get(`https://aws.random.cat/meow`)
            .then(response => {
                setCat(response.data)
                console.log(response)
                
            })
            .catch(err =>{
                console.log("no meoww", err)
            })

    },[])

   const  handleClick= ()=>{
        window.location.reload(false);
    }
    

    return(
        <CatPage>
            <H2>Meow lover?</H2>
            <Imgdiv> 
                <CatImg src={cat.file} alt="random cat picture"/>
            </Imgdiv>
            <Button onClick={handleClick}>More Meow</Button>
        </CatPage>
    )
}

export default Cat;