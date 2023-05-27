import React from "react";
import styles from './MdBtn.module.css'

type PropsType = {
    title: string
}

export default function MdBtn({title}: PropsType) {
    return (
        <div className={styles.wrapper}>
            <a href='#'>{title}</a>
        </div>
    )
}