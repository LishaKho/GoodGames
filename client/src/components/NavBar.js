import React from 'react';

const NavBar = (props) => {
    return(
        <nav className="navbar navbar-inverse nav-color">
            <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand nav-font" href="/games">GoodGames</a>
            </div>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="/games/registration"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                    <li><a href="/games/login"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar; 