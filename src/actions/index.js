import firebase from 'firebase';
export const voteAngular= ()=>{
    return{
        type : "VOTE_ANGULAR"
       }
    }
export const voteReact= ()=>{
return{
    type : "VOTE_REACT"
   }
}

export const voteVueJs= ()=>{
     return{
         type : "VOTE_VUEJS"
           }
        }


 export const receiveVotes= (payload)=>{
   
            return{
                type : "RECEIVE_VOTES",
                payload:payload
                  }
    }
export const addData = ()=>{
    return{
        type:'ADD_DATA'
    }
}