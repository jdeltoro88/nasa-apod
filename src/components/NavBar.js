import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="navbar">
            <ul>
                <Link className="link" to="/" exact >Home</Link>
                <Link classname='link' to='./RoverPhoto' >Rover</Link>
            </ul>
        </div>
    )
}



/*
import React from 'react'
import { Link } from 'react-router-dom'

export default 

*/