import React from "react";
import styles from './SmBtn.module.css'

type PropsType = {
    title: string
    website?: string
}

export default function SmBtn({title, website}: PropsType) {
    const hrefValue = website ? website : '#'
    const targetvalue = website ? '_blank' : ''

    return (
        <div className={styles.wrapper}>
            <a href={hrefValue} target={targetvalue}>{title}</a>
        </div>
    )
}