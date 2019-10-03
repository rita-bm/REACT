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
import Form from './Form';
import ElevarEstado from './ElevarEstado';
import Carrito from './Carrito';
import Shop from './Shop';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ElevarEstado></ElevarEstado>
        </header>
      </div>
    );
  }

export default App;
