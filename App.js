import React, { Component } from 'react';
import { Nav, NavLink, NavItem } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import { LUXCARS } from './shared/luxCars';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            luxCars: LUXCARS
        };
    }
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
                <Directory luxCars={this.state.luxCars} />
            </div>
        );
    }
}

export default App;