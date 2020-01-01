import React from 'react';
import Nav from './components/Nav';
import Dog from './components/Dog';
import Cat from './components/Cat';
import Perro from './perro.jpg';
import Gato from './gato.jpg';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import styled from 'styled-components';


const Page = styled.div`
  width:100%;
  heigth: 90vh:
 
`;

const Image= styled.img`
  max-width: 300px;
  max-height: 400px;
`;

const Middle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  // margin: 30px;
  align-items:center;
  background-color: papayawhip;
`;

const Or =styled.p`
  display: flex;
  align-items: center;
  font-size: 3rem;
  flex-direction: column;
  text-align:center;
`;
const H2= styled.h2`

 text-align: center;
 margin-top: 30px;
`;




function App() {
  return (
    <Router>
      <div className="App">
    
        <Nav/>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/dog" component={Dog}/>
        <Route path="/cat" component={Cat}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () =>{
return(
  <Page>
    <Middle>
      <Image src={Gato} Alt="cat picture"/>
      <Or>Or</Or>
      <Image src={Perro} Alt="dog picture"/>
    </Middle>
  </Page>
  )
}

export default App;
