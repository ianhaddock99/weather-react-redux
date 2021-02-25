import React from 'react'
import { update } from '../actions/templateActions'
import { useDispatch, useSelector } from 'react-redux'

const baseUrl = `https://api.openweathermap.org/data/2.5/`
const appId = process.env.REACT_APP_WEATHER_API_KEY;

// class SearchClass extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {}
//   }

//   componentDidMount() {
//     this.setState({
//       name: 'Alexander'
//     })
//   }

//   render() {
//     return <div>Hello my name is {this.state.name}</div>
//   }
// }


const Search = () => {
  const [inputValue, setInputValue] = React.useState(''); // initial state of input value is blank, when setinput value is called passes in whatever user searched for
  const dispatch = useDispatch()
  
  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
    let result = await fetch(`${baseUrl}forecast?q=${inputValue}&appid=${appId}`)
    let data =  await result.json();
    console.log(inputValue)


    
    if(data?.city?.coord){
      const {
        city: {
          coord: {
            lat, lon
          }
        }
      } = data //object desctructering based off what was in original api pulling out the lat and lon of typed in city
      
      if (lat  && lon) {
        let result = await fetch(`${baseUrl}onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=current,minutely,hourly,alerts&appid=${appId}`)
        let data =  await result.json();
        dispatch(update(data.daily));
        // dispatch -> update (payload) -> {type: '', payload: {}} action, reducer
      }
    }
  } catch (error) {
    console.log("Not a valid city");
  }
  }
    
    return (
      <>
      
      <div className="">
        <form className="d-flex justify-content-center mt-5" onSubmit={(e) => handleSubmit(e) }>
          <input style={{width: '400px'}} className="form-control mr-1 mt-5" type="search" placeholder="Enter City Name" aria-label="Search" onChange ={(e) => setInputValue(e.target.value)} />
          <button className="btn btn-outline-light mt-5" type="submit">Search</button>
        </form>
      </div>
      <h2 className="text-center mb-5 mt-5">{inputValue}</h2>


    </>
  )
  
}


export default Search