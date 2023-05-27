import React from "react";
import styles from './Content.module.css'
import Home from "./home/Home";
import Skills from "./skills/Skills";
import Works from "./works/Works";
import Remote from "./remote/Remote";
import Contacts from "./contacts/Contacts";
import BackBtn from "../libraries/btns/backBtn/BackBtn";

export default function Content() {
    return (
        <main className={styles.wrapper}>
            <Home title='Меня зовут Сергей Филиппов'
                  subtitle='Я front-end разработчик'
                  text='Привет!'/>
            <Skills />
            <Works />
            <Remote />
            <Contacts />
            <BackBtn />
        </main>
    );
}