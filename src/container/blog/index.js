import React, { Component } from 'react';
import styles from './blog.scss';
import iphone from '../../assets/Images/iphone.png';
import rectangle from '../../assets/Images/rectangle.png';


const Blog = () => {
    return (
        <div className={styles.container}> 
        <div className={styles.row}>
            <div className={styles.column}>
                <h3>popular post</h3>
                <ul>
                    <li><img src={rectangle}/> <span>i love donut cakes  i love donut cakes </span></li>
                    <li><img src={rectangle}/> <span>i love donut cakes  i love donut cakes </span></li>
                    <li><img src={rectangle}/> <span>i love donut cakes  i love donut cakes </span></li>
                </ul>
            </div>
            <div className={styles.column}>
                <h3>Suits on tweeter</h3>
                <ul>
                    <li>Sedluck</li>
                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    <li>Follow us</li>
                </ul>
            </div>
            <div className={styles.column}>
                <h3>About</h3>
                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </div>
            
        </div>
    </div>
    );
  }


export default Blog;
