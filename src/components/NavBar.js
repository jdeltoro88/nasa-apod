import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
      <div className="navbar">
        <ul>
          <Link className="link" to="/" exact>
            Home
          </Link>
          <Link className="link" to="/" exact>
            About
          </Link>
          <Link className="link" to="/" exact>
            FAQ
          </Link>
          <Link className="link" to="/" exact>
            Contact
          </Link>
        </ul>
      </div>
    );
}



/*
import React from 'react'
import { Link } from 'react-router-dom'

export default 

*/