import React, { useState, useEffect } from 'react'


import { Link } from 'react-router-dom'
import { Button } from './Button'

import './NavBar.css'

function NavBar() {
    const [click, setClick] = useState(false)
    const [button, setButton] =useState(true)

    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])
    

    window.addEventListener('resize', showButton)

    return (
        <React.Fragment>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMenu}>
                        ICIPE  <i className="fab fa-forumbee" />
                    </Link> 
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/observations' className='nav-links' onClick={closeMenu}>
                             Observations
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/maps' className='nav-links' onClick={closeMenu}>
                             Maps
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMenu}>
                             About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/login' className='nav-links-mobile' onClick={closeMenu}>
                             Login
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Login</Button>}
                </div>
            </nav>            
        </React.Fragment>
    )
}

export default NavBar
