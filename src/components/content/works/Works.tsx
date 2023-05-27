import React from "react";
import styles from './Works.module.css'
import Title from "../../libraries/title/Title";
import WorksCard from "./worksCard/WorksCard";

export default function Works() {
    return (
        <section id='works' className={styles.wrapper}>
            <Title title='Мои работы'/>
            <div className={styles.items}>
                <WorksCard title='lrb48.ru - официальный сайт Липецкой Районной больницы'
                           text='Государственное учреждение здравоохранения «Липецкая районная больница» '
                           img='site1.png'
                           website='https://lrb48.ru/'
                           titleBtn='Просмотреть'
                />
                <WorksCard title='gwrites-ma.de - помощь в написании работ'
                           text='онлайн-сервис помощи студентам. Здесь помогают с учёбой без посредников'
                           img='site3.png'
                           website='https://gwrites-ma.de/'
                           titleBtn='Просмотреть'
                />
                <WorksCard title='LiveNews24.ru - Новости России и мира сегодня '
                           text='LiveNews24.ru - точка сбора самых интересных и актуальных новостей России и мира сегодня. '
                           img='site2.png'
                           website='https://livenews24.ru/'
                           titleBtn='Просмотреть'
                />
            </div>
        </section>
    )
}