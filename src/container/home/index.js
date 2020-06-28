import React, { Component } from 'react';
import styles from './home.scss';
import iphone from '../../assets/Images/iphone-on.png';
import iphoneOff from '../../assets/Images/iphone-off.png';
import btn from '../../assets/Images/iphone-btn.png';


const Home = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <h2>Chocolate pudding dessert jelly</h2>
                        <div className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </div>
                        <button>Download on appstore</button>
                    </div>
                    <div className={styles.imgPhone}><img src={iphoneOff}/><img className={styles.phoneOn}src={iphone}/><img src={btn} className={styles.btn}/></div>
                    
                </div>
            </div>
        </div>
    );
  }


export default Home;
