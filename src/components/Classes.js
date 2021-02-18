import React, { Component } from 'react'
import {connect} from 'react-redux'
import {increment} from '../actions/templateActions'

class Classes extends Component {
  render() {
    return (
      <>
        <h1>Classes</h1>
        <h2>{this.props.count}</h2>
        <button onClick={()=>this.props.increment(5)}>Click Me</button>
      </>
    )
  }
}


//maps global state to a prop
//count is our props this.props.count
const mapStateToProps = (state) => {
  return{
    count: state.counter
  }
}

//increment is a props: this.props.increment(n)
const mapDispatchToProps = (dispatch) => {
    return {
            //update functions for state
            increment: (n)=>dispatch(increment(n)) //callback accepts param and pass it to 
    }
}

//conect takes 2 functions
//1st: pulling down state
//2nd: for updating state
export default connect(mapStateToProps, mapDispatchToProps) (Classes)
