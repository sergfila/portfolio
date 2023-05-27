import React from "react";
import styles from './SmBtn.module.css'

type PropsType = {
    title: string
    website?: string
}

export default function SmBtn({title, website}: PropsType) {
    return (
        <div className={styles.wrapper}>
            <a href={website} target='_blank'>{title}</a>
        </div>
    )
}