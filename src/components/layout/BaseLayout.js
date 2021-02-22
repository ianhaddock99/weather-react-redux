import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { update } from '../../actions/templateActions'
import {useDispatch} from 'react-redux'

const baseUrl = `https://api.openweathermap.org/data/2.5/`
const appId = process.env.REACT_APP_WEATHER_API_KEY;


const BaseLayout = (props) => {
  const [inputValue, setInputValue] = React.useState(''); // state , setState
  const dispatch = useDispatch()
  
  const handleSubmit = async(e) => {
    e.preventDefault()
    let result = await fetch(`${baseUrl}forecast?q=${inputValue}&appid=${appId}`)
    let data =  await result.json();
    console.log(inputValue)


    // try {
    
      const {
        city: {
          coord: {
            lat, lon
          }
        }
      } = data //object desctructering based off what was in original api
      
      
      
      
      if (lat && lon) {
        let result = await fetch(`${baseUrl}onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=current,minutely,hourly,alerts&appid=${appId}`)
        let data =  await result.json();
        dispatch(update(data.daily)) 
      }
    // } catch (error) {
    //   return "Not a city"
    // }
    }

  return (
    <>
      <Header />
      <div className="">
        <form className="d-flex justify-content-center mt-5" onSubmit={(e) => handleSubmit(e) }>
          <input style={{width: '400px'}} className="form-control mr-1 mt-5" type="search" placeholder="Enter City Name" aria-label="Search" onChange ={(e) => setInputValue(e.target.value)} />
          <button className="btn btn-outline-light mt-5" type="submit">Search</button>
        </form>
      </div>
      {props.children}

      <Footer />
    </>
  )
  
}


export default BaseLayout
