import React from "react";
import styles from './SocialMedia.module.css'

type PropsType = {
    link: string
    path: string
    alt: string
}

export default function SocialMedia({link, path, alt}: PropsType) {
    return (
        <div className={styles.wrapper}><a href={link} target='_blank'><img src={`${process.env.PUBLIC_URL}${path}`} alt={alt}/></a></div>
    )
}