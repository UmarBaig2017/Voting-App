import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase'
import { voteAngular ,addData, voteReact , voteVueJs, receiveVotes} from "./actions";
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props){
    super(props)
    this.store = this.props.store
  }



  handleVoteAngular =()=>{
    this.store.dispatch(voteAngular());
    this.handleVoteUpdate() 
    let angularVotes = this.store.getState().angular
    let firebaseAngularRef = firebase.database().ref('angular')
    firebaseAngularRef.set(angularVotes)
  }

  handleVoteReact =()=>{

    this.store.dispatch(voteReact());
    let reactVotes = this.store.getState().react
    let fireabseReactRef = firebase.database().ref('react')
    fireabseReactRef.set(reactVotes)
    this.handleVoteUpdate()
  }

  handleVoteVuejs =()=>{
    this.store.dispatch(voteVueJs());
    this.handleVoteUpdate()
    let vuejsvote = this.store.getState().vuejs
    let firebaseVuejsRef = firebase.database().ref('vuejs')
    firebaseVuejsRef.set(vuejsvote)

  }
  handleVoteUpdate(){
        let newData = this.store.getState().totalVotes+1
        firebase.database().ref('totalvotes').set(newData).then(()=>console.log('done'))
        this.store.dispatch(addData())
  }
  render() {
    return (
      <div>
        
        <div className="jumbotron" style={{'textAlign': 'center'}}>
       
          <img src="ctsw_logo.png" height="96" alt="CodingTheSmartWay.com"></img>
          <h2>What is your favorite front-end framework in 2017?</h2>
          <h4>Click on the logos below to vote!</h4>
          <br /> 
          <div className="row" >
            <div className="col-xs-offset-3 col-xs-2">
              <img src="angular_logo.png" height="96" alt="Angular" onClick={this.handleVoteAngular}></img>
            </div>
            <div className="col-xs-2">
              <img src="react_logo.png" height="96" alt="Angular" onClick={this.handleVoteReact}></img>
            </div>
            <div className="col-xs-2">
              <img src="vuejs_logo.png" height="96" alt="Angular" onClick={this.handleVoteVuejs}></img>
            </div>
           
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
