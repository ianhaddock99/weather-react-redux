import React from 'react'
import { useDispatch } from 'react-redux';
import {
    Link,
    useHistory
} from 'react-router-dom'
import { update } from '../../actions/templateActions';


const Header = (props) => {
  const [state, setState] = React.useState({path: ''});
  const history = useHistory();
  const dispatch = useDispatch()


  //listening for path name change takes copy of previos path and changes it
  React.useEffect(() => {
    history.listen((data) => {
      setState({
        ...state,
        path: data.pathname
      })
    })
    if (state.path !== '/class') {
      dispatch(update([])) //if link clicked on is not class it will clear the existing cards
    }

  }, [state.path])
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
  <Link className="navbar-brand" to="#">ForeCast</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/class">Search</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      {/* <li className="nav-item">
        <Link className="nav-link disabled" to="#">Disabled</Link>
      </li> */}
    </ul>
  </div>
</nav>
    </>
  )
}

export default Header
