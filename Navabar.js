import React from 'react'
import { Component } from 'react';
class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-danger">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Apna-Cart
            </a>

          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
