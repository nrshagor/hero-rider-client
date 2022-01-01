import React, { useState } from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';
import { MenuItem } from './ManuItem';
import './Navigation.css'
const Navigation = () => {
    const { user, logOut } = useAuth()
    const [clicked, setClicked] = useState(false);
    const handleClick = e => {
        if (clicked === true) {
            setClicked(false)
        } else {
            setClicked(true)
        }

        e.preventDefault();
    }
    return (

        <div id='navbar'>
            <nav className='NavbarItem'>
                <h1 className="navbar-logo">Hero Rider</h1>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItem.map((item, index) => {
                        return (
                            <li><Link key={item._id} className={item.cName} to={item.url}>{item.title}</Link></li>
                            // <li><a className={item.cName} href={item.url} smooth={true} duration={1000}>{item.title}</a></li>
                        )
                    })}
                    {
                        user?.email ?

                            <>
                                <Nav.Link as={Link} to="/dashbord">Dashbord</Nav.Link>
                                <Button className="nav-btn" onClick={logOut}>Log Out</Button>
                            </>

                            :
                            <>
                                <Nav.Link as={Link} to="/login">login</Nav.Link>
                                <Nav.Link as={Link} to="/registerd">registerd</Nav.Link>
                            </>
                    }
                    <h5 className="userName" style={{ color: "white" }}> {user.displayName}</h5>
                </ul>

            </nav>
        </div>
    );
};

export default Navigation;