import React from "react";
import styles from './Contacts.module.css'
import Title from "../../libraries/title/Title";

export default function Contacts() {
    return (
        <section id='contacts' className={styles.wrapper}>
            <Title title='Контакты'/>
            <form className={styles.form}>
                <div className={styles.item}>
                    <div className={styles.text_field}>
                        <label className={styles.text_field__label} htmlFor="login">Введите ваше имя</label>
                        <input className={styles.text_field__input} type="text" name="login" id="login" placeholder='Введите ваше имя'
                               />
                    </div>
                    <div className={styles.text_field}>
                        <label className={styles.text_field__label} htmlFor="email">Введите ваш Email</label>
                        <input className={styles.text_field__input} type="text" name="email" id="email" placeholder='Введите ваш Email'
                               />
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.text_field}>
                        <label className={styles.text_field__label} htmlFor="write_us">Напишите нам</label>
                        <textarea className={styles.text_field__input} name="write_us" id="write_us" placeholder='Введите ваше сообщение...'
                        />
                    </div>

                </div>
                <div className={styles.btn_wrapper}>
                    <button type='submit'>Отправить</button>
                </div>
            </form>
        </section>
    );
}