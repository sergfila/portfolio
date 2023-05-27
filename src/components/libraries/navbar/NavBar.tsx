import React from "react";
import styles from './NavBar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.wrapper}>
            <div className={styles.item}><a href='#main'>Главная</a></div>
            <div className={styles.item}><a href='#skills'>Скиллы</a></div>
            <div className={styles.item}><a href='#works'>Работы</a></div>
            <div className={styles.item}><a href='#contacts'>Контакты</a></div>
        </nav>
    )
}