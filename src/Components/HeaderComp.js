import React, {Component} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
  } from 'reactstrap';

  import { NavLink } from 'react-router-dom';

class Header extends Component{

    constructor(props){
        super(props)
        this.state = {
            isNavOpen: false
        }
        this.toggleNave = this.toggleNave.bind(this)
    }

    toggleNave(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render(){
        return(
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">Jarif's Portfolio</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNave} />
                    <Collapse isOpen={this.state.isNavOpen} navbar >
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink to="/Home" className="nav-link">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/Skills" className="nav-link">Skills</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/Projects" className="nav-link">Projects</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/Contact" className="nav-link">Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header