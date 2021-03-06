import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import {
    Link,
    useHistory
} from 'react-router-dom'
import { update } from '../../actions/templateActions';


const Header = (props) => {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed); //controls dropdown for responsive pages
  
  const [state, setState] = React.useState({path: ''});
  const history = useHistory(); //The useHistory hook gives you access to the history instance that you may use to navigate
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
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
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
    </ul>
  </div>
</nav>
    </>
  )
}

export default Header
