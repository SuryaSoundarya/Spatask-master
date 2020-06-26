import React, { Component } from 'react';
import styles from './home.scss';
import iphone from '../../assets/Images/iphone.png';


const Home = () => {
    return (
        <div className={styles.container}> 
        <div className={styles.alignCenter}>
            <div className={styles.row}>
                <div className={styles.column}>
                    <h2>Chocolate pudding dessert jelly</h2>
                    <div className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </div>
                    <button>Download on appstore</button>
                </div>
                <div className={styles.column}><img src={iphone} alt="iphone"/></div>
            </div>
        </div>
    </div>
    );
  }


export default Home;
