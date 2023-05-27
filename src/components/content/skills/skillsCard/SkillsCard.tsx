import React from "react";
import styles from './SkillsCard.module.css'

type PropsType = {
    title: string
    text: string
    img: string
}

export default function SkillsCard({title, text, img}: PropsType) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.icon}>
                <img src={`${process.env.PUBLIC_URL}${img}`} alt='' />
            </div>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.text}>
                {text}
            </div>
        </div>
    );
}