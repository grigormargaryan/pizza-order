import React, { Component } from "react";
import { Nav, NavItem, NavLink } from 'reactstrap';


export default class Header extends Component {
  render() {
    return (
      <div className="mb-3">
        <Nav tabs>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/my-orders">My Orders</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
