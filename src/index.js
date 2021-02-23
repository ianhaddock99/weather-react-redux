import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DailyForecast from './components/DailyForecast.js'
import About from './components/About.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers/reducerTemplate'
import BaseLayout from './components/layout/BaseLayout'
import './assets/styles.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundry'
// import Search from './components/Search'



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
        <ErrorBoundary>
        <BaseLayout>
          <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/class' component={DailyForecast}/>
            <Route path='/about' component={About}/>
          </Switch>
        </BaseLayout>
        </ErrorBoundary>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

