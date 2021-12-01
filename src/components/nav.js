import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/marvelLogo.svg'

const Nav = () => {

    
    return (
        <nav className="navbar">
            <div className="logo">
                <Link className="image-link" to="/">
               <img src={logo} alt="Marvel" />
               </Link>
            </div>
            <ul className="navigation">
                
                <Link className="nav-elem" to="/characters">Characters</Link>    
                <Link className="nav-elem" to="/comics">Comics</Link>    
                <Link className="nav-elem" to="/series">Series</Link>    
            </ul>
        </nav>
    )
}

export default Nav
