import React from "react";
import styles from './Logo.module.css'

export default function Logo() {
    return (
        <div className={styles.wrapper}>
            <a href='#'><img src={`${process.env.PUBLIC_URL}/logo.png`} alt='logo' /></a>
        </div>
    )
}