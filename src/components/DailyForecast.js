import React, { Component } from 'react'
import {connect} from 'react-redux'
import Search from './Search';

class DailyForecast extends Component {
  render() {
    return (

      <>

          
          <Search /> 
          <h1 className="text-center mb-5 mt-5">8 Day Forecast</h1>
  

          <div className="justify-content-lg-center" style={{display: 'flex', flexWrap: 'wrap'}}>

          {this.props.daily.map((day) => {
            
            
            const date = new Date(day.dt * 1000).toDateString();
            // console.log(date);
            
            let iconcode = day.weather[0].icon;
            let iconurl = "https://openweathermap.org/img/wn/" + iconcode + "@2x.png"; //renders img from API
            
            return(
              //key prop below, random 9-character alphanumerical string, throw away key
              <div className="card ml-4 mr-2 mb-4" key={ Math.random().toString(36).substr(2, 9) } style={{width: "18rem"}}> 
                <div className="card-body text-center">
                  <h5 className="card-title">{date}</h5>
                  <hr/>
                  <h5 className="card-title">Maximum Temp: {Math.round(day.temp.max)} F</h5>
                  <h5 className="card-title">Minimum Temp: {Math.round(day.temp.min)} F</h5>
                  <hr/>
                  <h5 className="card-title">{day.weather[0].description.split(' ').map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' ') }</h5>
                  <img src={iconurl} />
                  <hr/>
                  <h6 className="card-subtitle mb-3">Humidity: {day.humidity}%</h6>
                  <h6 className="card-subtitle mb-2">UV Index: {day.uvi}</h6>
                  {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  {/* <a href="#" className="card-link">Card link</a>
                  <a href="#" className="card-link">Another link</a> */}
                </div>
              </div>
            )
          })}
        </div>
      </>
    )
  }
}


//maps global state to a prop
//count is our props this.props.count
const mapStateToProps = (state) => {
  return {
    daily: state.daily
  }
}

//increment is a props: this.props.increment(n)
const mapDispatchToProps = (dispatch) => {
    return {
            //update functions for state
            
    }
}

//conect takes 2 functions
//1st: pulling down state
//2nd: for updating state
export default connect(mapStateToProps, null)(DailyForecast)
