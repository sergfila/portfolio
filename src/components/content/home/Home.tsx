import React from "react";
import styles from './Home.module.css'
import MdBtn from "../../libraries/btns/mdBtn/MdBtn";

type PropsType = {
    title: string
    subtitle: string
    text: string
}

export default function Content({title, subtitle, text}:PropsType) {
    return (
        <section id='main' className={styles.wrapper} >
            <div className={styles.item}>
                <div className={styles.container_text}>
                    <div className={styles.text}>
                        {text}
                    </div>
                    <div className={styles.title}>
                        {title}
                    </div>
                    <div className={styles.subtitle}>
                        {subtitle}
                    </div>
                </div>
                <div className={styles.btn_wrapper}>
                    <MdBtn title='Бесплатная консультация' />
                </div>
            </div>
            <div className={styles.item}>
                <img src={`${process.env.PUBLIC_URL}001.jpg`} alt='' />
            </div>
        </section>
    );
}