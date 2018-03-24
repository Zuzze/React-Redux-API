import React from 'react';
import { Navbar, Nav, NavItem, NavbarBrand } from 'react-bootstrap';
require('./style.scss');

      /**
       * Global responsive Navbar for the app
       */
      export default class Navigation extends React.Component {
        constructor(props) {
          super(props);
        }
    
        render() {
          
          return (
            <Navbar collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/vessels" className="logo">LOGISTICS API</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem href="/vessels">
                    Vessels
                </NavItem>
                <NavItem href="/containers">
                    Containers
                </NavItem>
                <NavItem href="/vessel_plans">
                    Vessel Plans
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          );
        }
      }