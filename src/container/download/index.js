import React, { Component } from 'react';
import styles from './download.scss';
import iphone from '../../assets/Images/iphone.png';


const Download = () => {
    return (
        <div className={styles.container}> 
        <div className={styles.row}>
                <div className={styles.column}>
                    <h2><span>Chocolate</span> pudding dessert jelly <span>fruit cake trat</span> jelly wafer</h2>
                    <div className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </div>
                    <button>Download</button>
                </div>
        </div>
    </div>
    );
  }


export default Download;
