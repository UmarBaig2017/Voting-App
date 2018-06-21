import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './App.jsx';
import myApp from './Reducers';
import { createStore } from 'redux'
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Results from "./components/results"


let store = createStore(myApp);


function rend(){
ReactDOM.render(
    <div className="container">
<App store={store} />
<hr/>
<Results store={store}/>
</div>
,
 document.getElementById('root')
);
}

store.subscribe(rend);
rend();
