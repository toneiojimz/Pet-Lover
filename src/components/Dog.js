import React, {useState, useEffect} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";
import styled from 'styled-components';

const H2= styled.h2`
 text-align: center;
 margin-top: 30px;
 font-size: 4rem;
`;

const DogImg = styled.img`
    display:flex;
    max-width: 600px;
    max-height: 450px;
    padding: 20px;
`;
const Imgdiv= styled.div`
    display: flex;
    justify-content:center;
`;

const DogPage=styled.div`
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


function Dog(){
   
    const [dog, setDog]= useState({});

    useEffect (() => {

        axios
            .get(`https://random.dog/woof.json`)
            .then(response => {
                setDog(response.data)
                console.log(response)
                
            })
            .catch(err =>{
                console.log("no woof today", err)
            })

    },[])

  


    const  handleClick= ()=>{
      
        window.location.reload(false);
    }
    

    return(
        <DogPage>
            <H2>Woof lover?</H2>
            <Imgdiv> 
                 <DogImg src={dog.url} alt="random dog picture"/>  
            </Imgdiv>
            <Button onClick={handleClick}>More Woof</Button>
        </DogPage>
    )
}

export default Dog;