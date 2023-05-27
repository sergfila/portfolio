import React from "react";
import styles from './Skills.module.css'
import Title from "../../libraries/title/Title";
import SkillsCard from "./skillsCard/SkillsCard";

export default function Skills() {
    return (
        <section id='skills' className={styles.wrapper}>
            <Title title='Мои скиллы' />
            <div className={styles.items}>
                <SkillsCard title='React' text='React - это JavaScript библиотека для создания пользовательских
                        интерфейсов, которая позволяет разработчикам эффективно управлять динамическим содержимым
                        веб-страниц.' img='/react.svg'
                />
                <SkillsCard title='HTML/CSS' text='HTML и CSS - это языки разметки и стилей соответственно,
                        используемые для создания и оформления веб-страниц.' img='/css.svg'
                />
                <SkillsCard title='JS' text='JavaScript (JS) - это язык программирования, который обеспечивает
                        интерактивность и динамическое поведение веб-страниц и приложений.' img='/js.svg'
                />
                <SkillsCard title='React' text='React - это JavaScript библиотека для создания пользовательских
                        интерфейсов, которая позволяет разработчикам эффективно управлять динамическим содержимым
                        веб-страниц.' img='/react.svg'
                />
                <SkillsCard title='HTML/CSS' text='HTML и CSS - это языки разметки и стилей соответственно,
                        используемые для создания и оформления веб-страниц.' img='/css.svg'
                />
                <SkillsCard title='JS' text='JavaScript (JS) - это язык программирования, который обеспечивает
                        интерактивность и динамическое поведение веб-страниц и приложений.' img='/js.svg'
                />
            </div>
        </section>
    );
}