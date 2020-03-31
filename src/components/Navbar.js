import React from 'react';
import './Navbar.css'

function Navbar() {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="left hide-on-med-and-down">
                        <li><a href="#aboutmesection">About Me</a></li>
                        <li><a href="#portfoliosection">Portfolio</a></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><a href="#aboutmesection">About Me</a></li>
                <li><a href="#portfoliosection">Portfolio</a></li>
            </ul>
        </div>
    );

}

export default Navbar;