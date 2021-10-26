import React, { Component } from 'react';
import { Nav, NavLink, NavItem } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App" >
                <Nav vertical>
                    <NavItem>
                    <NavLink href="#">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Directory</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">About Us</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Contact Us</NavLink>
                    </NavItem>
                </Nav>
                <Directory />
            </div>
        );
    }
}

export default App;