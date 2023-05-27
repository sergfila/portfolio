import React from "react";
import styles from './Footer.module.css'
import SocialMedia from "./socialMedia/SocialMedia";
import Navbar from "../libraries/navbar/NavBar";

export default function Footer() {
    return (
        <footer className={styles.wrapper}>
            <div className={styles.item}>
                <div className={styles.title}>Сергей Филиппов</div>
                <div className={styles.social_container}>
                    <SocialMedia link='https://api.whatsapp.com/send?phone=79158590661' path='whatsapp.svg' alt='whatsapp'/>
                    <SocialMedia link='skype:sergfila?chat' path='skype.svg' alt='skype'/>
                    <SocialMedia link='https://github.com/sergfila' path='git.svg' alt='git'/>
                    <SocialMedia link='https://t.me/sergfila' path='telegram.svg' alt='telegram'/>
                </div>
                <Navbar />
            </div>
            <div className={styles.item}>
                &#169;2023 Все правда защищены
            </div>
        </footer>
    );
}