import React, { Component } from "react";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { fetchSmurfs } from "./actions";
import { connect } from 'react-redux'

class App extends Component {
  componentDidMount(props) {
    axios.get('http://localhost:3333/smurfs')
    .then(res => console.log(res))
    .catch(err => console.log('Axios Error', err));
  }

  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    smurfs: state.smurfs,
    loading: state.loading,
  }
}

export default connect(mapState)(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.