import React from "react";
import styles from './WorksCard.module.css'
import SmBtn from "../../../libraries/btns/smBtn/SmBtn";


type PropsType = {
    title: string
    text: string
    img: string
    website: string
    titleBtn: string
}

export default function WorksCard({title, text, img, website, titleBtn}: PropsType) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.item}>
                <img src={`${process.env.PUBLIC_URL}${img}`} alt='' />
                <SmBtn title={titleBtn} website={website}/>
            </div>
            <div className={styles.item}>
                <div className={styles.title}>
                    {title}
                </div>
                <div className={styles.text}>
                    {text}
                </div>
            </div>
        </div>
    )
}