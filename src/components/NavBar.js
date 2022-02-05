import React from "react";
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from "react-bootstrap"
import {NavLink , useHistory} from "react-router-dom"
import { UserStoreContext } from "../context/UserContext";

const NavBar = () => {

  const history = useHistory();
  const userStore = React.useContext(UserStoreContext)
  //const [profile,setProfile] = React.useState(null)

  // const getProfile = () =>{
  //     //localStorage.getItem('profile')
  //     const profileValue = JSON.parse(localStorage.getItem('profile'))
  //     if(profileValue){
  //       setProfile(profileValue)
  //     }
  // }

  const logout = () =>{
    localStorage.removeItem('token')
    localStorage.removeItem('profile')
    history.replace('/')
    history.go(0)
  }

  // React.useEffect(()=>{
  //   getProfile()
  // },[])

  return (
    <div>
      <Navbar bg="light" expand="lg">
       {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <NavLink className="navbar-brand" to="/">React-Bootstrap</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <NavLink className="nav-link" activeClassName="active" to="/" exact>Home</NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/product" >Product</NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/about" >About</NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/contactus" >Contactus</NavLink>

            <NavDropdown title="Workshop Pagination" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => {
                history.replace('/hospital')
              }}>Hospital List</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {
                history.replace('/category')
              }}>News Category</NavDropdown.Item>
            </NavDropdown>

            <NavLink className="nav-link" activeClassName="active" to="/upload" >Upload</NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/member">Member</NavLink>
          </Nav>
          <Nav>
            <NavLink className="nav-link" activeClassName="active" to="/register">Register</NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/login">Login</NavLink>

          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          {
            userStore.profile ? (
              <span className="nav-text">Welcome {userStore.profile.name} 
              <button onClick={logout} className="btn btn-danger ml-2">
                Logout</button>
                </span>
            ) : (
              <>
                <Nav>
                  <NavLink className="nav-link" activeClassName="active" to="/register">Register</NavLink>
                  <NavLink className="nav-link" activeClassName="active" to="/login">Login</NavLink>
                </Nav>
              </>
            )
          }
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;