import React from 'react';
import styles from './BackBtn.module.css'

export default function BackBtn() {
    return (
        <div>
            <a className={styles.button} href='#top'>
                <img src={`${process.env.PUBLIC_URL}/arrow.svg`} alt=''/>
            </a>
        </div>
    );
}