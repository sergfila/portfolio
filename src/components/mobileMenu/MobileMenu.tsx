import React from 'react';
import styles from './MobileMenu.module.css'

type propsTyps = {
    onMenuClick: () => void
}

export default function MobileMenu({ onMenuClick }: propsTyps) {
    const handleClick = () => {
        onMenuClick();
    }

    return (
        <section className={styles.wrapper}>
            <nav>
                <ul>
                    <li><a href='#main' onClick={handleClick}>Главная</a></li>
                    <li><a href='#skills' onClick={handleClick}>Скиллы</a></li>
                    <li><a href='#works' onClick={handleClick}>Работы</a></li>
                    <li><a href='#contacts' onClick={handleClick}>Контакты</a></li>
                </ul>
            </nav>
        </section>
    );
}