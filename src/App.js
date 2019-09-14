import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting.js';
import ShowName from './ShowName.js';
import ShowDate from './ShowDate.js';
import ShowMessage from './ShowMessage.js';
import ShowComponent from './ShowComponent.js';
import Title from './Title.js';
import Text from './Text.js';
import List from './List.js';
import ListItem from './ListItem.js';
import Link from './Link.js';
import Loading from './Loading.js';
import Parent from './Parent.js';
import NuevoTitle from './NuevoTitle.js';
//import CambioEstados from './CambioEstados.js';
//import ChangeString from './ChangeString.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Title>Necesito partir en componentes todo esto</Title>
       <Text>Para ello puedo usar React que me permitirá poder reutilizar todos esos componentes. Para ello tengo que:</Text>
       <List>
         <ListItem>Observar el HTML</ListItem>
         <ListItem>Pensar en como puedo extraer cada trozo en componentes</ListItem>
         <ListItem>Usarlos en React</ListItem>
       </List>
       <Link to="to" openInNewTab>React Docs</Link>
       <Loading show={false}> Hijos! </Loading>
       <Parent/>
       <NuevoTitle>Esto es un nuevo title</NuevoTitle>
      </header>
    </div>
  );
}

export default App;
