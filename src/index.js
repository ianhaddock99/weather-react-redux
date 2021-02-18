import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Hooks from './components/Hooks.js'
import Classes from './components/Classes.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers/reducerTemplate'
import BaseLayout from './components/layout/BaseLayout'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


const saveToLocalStorage = (state) => {
  try{
    const serializeState = JSON.stringify(state);
    localStorage.setItem('state', serializeState);
  }
  catch(e){
    console.log(e);
  }
  
}

const loadFromLocalStorage = (params) => {
  //serialization = converting js object to a string
  const serializeState = localStorage.getItem('state');
  if(serializeState === null){
    return undefined;
  }
  else{
    return JSON.parse(serializeState); //returns JS obejct representing local storage
  }
  
}

const persistedState = loadFromLocalStorage();




//initializing redux store
let store = createStore(reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(()=>{
  saveToLocalStorage(store.getState());
})

//provider hooks react to redux
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <BaseLayout>
          <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/hooks' component={Hooks}/>
            <Route path='/class' component={Classes}/>
          </Switch>
        </BaseLayout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

