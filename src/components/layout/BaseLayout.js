import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch
} from 'react-router-dom'




const BaseLayout = (props) => {
    return (
      <>
      <Header />
      
      {props.children}

      <Footer />
    </>
  )
  
}


export default BaseLayout
