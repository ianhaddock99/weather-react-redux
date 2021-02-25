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

          {this.props.daily.map((day, index) => {
            
            const date = new Date(day.dt * 1000).toDateString();
            
            let iconcode = day.weather[0].icon;
            let iconurl = "https://openweathermap.org/img/wn/" + iconcode + "@2x.png"; //renders img from API
            
            return(
              //key is index of array 
              <div className="card ml-4 mr-2 mb-4" key={index} style={{width: "18rem"}}> 
                <div className="card-body text-center">
                  <h5 className="card-title">{date}</h5>
                  <hr/>
                  <h5 className="card-title">Maximum Temp: {Math.round(day.temp.max)} F</h5>
                  <h5 className="card-title">Minimum Temp: {Math.round(day.temp.min)} F</h5>
                  <hr/>
                  <h5 className="card-title" id="weather-description">{day.weather[0].description}</h5>
                  <img src={iconurl} />
                  <hr/>
                  <h6 className="card-subtitle mb-3">Humidity: {day.humidity}%</h6>
                  <h6 className="card-subtitle mb-2">UV Index: {day.uvi}</h6>
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
//tapWater -> filter -> cleanWter
//middleware used to grab information from redux store and pass into component as props
const mapStateToProps = (state) => {
  return {
    daily: state.daily
  }
}


//conect takes 2 functions
//1st: pulling down state
//2nd: for updating state
export default connect(mapStateToProps, null)(DailyForecast)
