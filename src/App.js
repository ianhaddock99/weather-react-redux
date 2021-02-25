import React from 'react'


const App = () => {
  
  return (
    <>

      <div className="jumbotron jumbotron-fluid d-none d-lg-block">
        <div className="container">
        </div>
      </div>
      <div className="text-center justify-content-center mt-5 pt-3">
        <p className="lead">Welcome to ForeCast! This App will allow you to search a city and return back an 8 day forecast. Use the navigation links in the top right to reach the search page and the about me page.</p>
      </div>

    <section id="block_content">
      <div className="col-md-2 container">
        <blockquote className="blockstyle">This app saved my marriage!</blockquote>
        <blockquote className="blockstyle">I made a million dollars on this app!</blockquote>
        <blockquote className="blockstyle">This app made me 20 years younger!</blockquote>
      </div>
    </section>
    </>
  )
}

export default App

