import React from 'react';
import styles from './Header.module.css'
import SmBtn from "../libraries/btns/smBtn/SmBtn";
import Logo from "../libraries/logo/Logo";
import Burger from "./burger/Burger";
import Navbar from "../libraries/navbar/NavBar";

export default function Header() {
    return (
        <header id='top' className={styles.wrapper}>
            <Logo />
            <div className={styles.nav_wrapper}>
                <Navbar />
            </div>
            <div className={styles.btn_wrapper}>
                <SmBtn title='Свяжись со мной!'/>
            </div>
            <div className={styles.burger_wrapper}>
                <Burger />
            </div>
        </header>
    );
}