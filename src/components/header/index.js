import React, { Component, useState } from 'react';
import { Link,NavLink } from 'react-router-dom';
import styles from './header.scss';
import Logo from '../../assets/Images/site-logo.png';
import Hamburger from '../../assets/Images/hamburger.png';


const Header = () => { 
    const [show, showMenu] = useState(false);
    return (
        <header>
                <div>
                    <img src={Logo}/>
                    <nav className={show ? styles.active : null}>
                        <NavLink to="/" exact activeClassName={styles.active} onClick={() => showMenu(false)}>Home</NavLink>
                        <NavLink to="/features" activeClassName={styles.active} onClick={() => showMenu(false)}>Features</NavLink>
                        <NavLink to="/download" activeClassName={styles.active} onClick={() => showMenu(false)}>Download</NavLink>
                        <NavLink to="/blog" activeClassName={styles.active} onClick={() => showMenu(false)}>Blog</NavLink>
                        <NavLink to="/contact" activeClassName={styles.active} onClick={() => showMenu(false)}>Contact</NavLink>
                    </nav>
                    <img src={Hamburger} onClick={() => showMenu(true)} className={styles.menu}/>
                </div>
            </header>
    );
}


export default Header;
