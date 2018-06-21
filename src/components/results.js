import React , {Component} from 'react';
import firebase from 'firebase';
import {receiveVotes ,voteReact,voteVueJs,voteAngular} from '../actions/index'
 // Initialize Firebase
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyAZjB7fIY2XYQCT6F-t7rZt_E_5AhpiOIQ",
    authDomain: "votiong-app.firebaseapp.com",
    databaseURL: "https://votiong-app.firebaseio.com",
    projectId: "votiong-app",
    storageBucket: "votiong-app.appspot.com",
    messagingSenderId: "131797356323"
  };
  firebase.initializeApp(config);


  export default  class Results extends Component {
    constructor(props){
        super(props)
        this.store = this.props.store
    }


  totalVotes(){
    //   let curstate= this.store.getState().totalVotes;          
    //   (firebase.database().ref('totalvotes').set(curstate)
    // .then(()=>{
    //     console.log("done")
    // }))

    //   if (this.store.getState().totalVotes){
      
    //        return(this.store.getState().totalVotes)
    //   }
    //   else{

      
        
    //     return 0
       
    //   }


    // if(this.store.getState().totalVotes()){
    //     return(
    //         this.store.getState().totalVotes()
    //     )
    // }


  }


 componentDidMount(){
    let dataRec = undefined;
    let firebaseRef = firebase.database().ref()
    firebaseRef.once('value',(snap)=>{
         let rec = snap.val()
         console.log('rec='+rec)
        dataRec = rec
     }).then(()=>{
     this.store.dispatch(receiveVotes(dataRec.totalvotes))
     
     for(let i=1;i<=dataRec.react;i++)
     this.store.dispatch(voteReact())

     for(let i=1;i<=dataRec.angular;i++)
     this.store.dispatch(voteAngular())
     for(let i=1;i<=dataRec.vuejs;i++)
     this.store.dispatch(voteVueJs())

     })
   
     
 }
 
    votesAngularInPercent(){
        if (this.store.getState().angular)
        {   
            return (this.store.getState().angular / (this.store.getState().angular +  this.store.getState().react + this.store.getState().vuejs)) *100
            
        } else{
            return 0
        }
    }
    votesReactInPercent(){
        if (this.store.getState().react){
            return (this.store.getState().react / (this.store.getState().angular +  this.store.getState().react + this.store.getState().vuejs)) *100
        } else{
            return 0
        }
    }
    votesVuejsInPercent(){
        if (this.store.getState().vuejs){
            return (this.store.getState().vuejs / (this.store.getState().angular +  this.store.getState().react + this.store.getState().vuejs)) *100
        } else{
            return 0
        }
    }
    votesAngularInPercentStyle(){
        return{
            width : this.votesAngularInPercent()+ '%'
        }
    }

    votesReactInPercentStyle(){
        return{
            width : this.votesReactInPercent()+ '%'
        }
    }

    votesVuejsInPercentStyle(){
        return{
            width : this.votesVuejsInPercent()+ '%'
        }
    }
  
    render(){
        return(
            <div>
               <div> <h4>Total Votes = {this.store.getState().totalVotes} </h4> </div>
                <span className="label label-danger"> Angular : {this.votesAngularInPercent().toFixed(2)+ '%'} </span>
                <div className="progress progress-striped active">
                <div className="progress-bar progress-bar-danger" style={this.votesAngularInPercentStyle()}>
                 </div>
                 </div>

                 <span className="label label-danger"> React : {this.votesReactInPercent().toFixed(2)+ '%'} </span>
                <div className="progress progress-striped active">
                <div className="progress-bar progress-bar-danger" style={this.votesReactInPercentStyle()}>
                 </div>
                 </div>

                 <span className="label label-danger"> VueJs : {this.votesVuejsInPercent().toFixed(2)+ '%'} </span>
                <div className="progress progress-striped active">
                <div className="progress-bar progress-bar-danger" style={this.votesVuejsInPercentStyle()}>
                 </div>
                 </div>


                
             </div>


        )
    }
}