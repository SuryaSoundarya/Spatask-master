import React, { Component } from 'react';
import col1 from '../../assets/Images/col-1-img.png';
import col2 from '../../assets/Images/col-2-img.png';
import styles from './features.scss';

class Features extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className={styles.features}>
                    <h2>App Features</h2>
                    <div className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </div>
                    <div class={styles.cardBlock}>
                        <div className={styles.item}><span><img src={col1}/></span><span>scalable</span>
                            <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </div>
                        </div>
                        <div className={styles.item}><span><img src={col2}/></span><span>scalable</span>
                            <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </div>
                        </div>
                        <div className={styles.item}><span><img src={col2}/></span><span>scalable</span>
                            <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </div>
                        </div>
                    </div>
                </div>
        )
    }
}

Features.propTypes = {

};


export default Features;
