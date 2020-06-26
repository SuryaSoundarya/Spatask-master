import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.scss';
import Logo from '../../assets/Images/logo.png';
import Hamburger from '../../assets/Images/hamburger.png';


const Header = () => { 
    const [show, showMenu] = useState(false);
    return (
        <header>
                <div>
                    <img src={Logo}/>
                    <nav className={show ? styles.active : null}>
                        <Link to="/" onClick={() => showMenu(false)}>Home</Link>
                        <Link to="/features" onClick={() => showMenu(false)}>Features</Link>
                        <Link to="/download" onClick={() => showMenu(false)}>Download</Link>
                        <Link to="/blog" onClick={() => showMenu(false)}>Blog</Link>
                        <Link to="/contact" onClick={() => showMenu(false)}>Contact</Link>
                    </nav>
                    <img src={Hamburger} onClick={() => showMenu(true)} className={styles.menu}/>
                </div>
            </header>
    );
}


export default Header;
