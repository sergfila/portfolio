import React from "react";
import styles from './Logo.module.css'

export default function Logo() {
    return (
        <div className={styles.wrapper}>
            <img src={`${process.env.PUBLIC_URL}logo.svg`} alt='logo' />
        </div>
    )
}