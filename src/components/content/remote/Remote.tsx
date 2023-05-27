import React from "react";
import styles from './Remote.module.css'
import Title from "../../libraries/title/Title";
import MdBtn from "../../libraries/btns/mdBtn/MdBtn";

export default function Remote() {
    return (
        <section className={styles.wrapper}>
            <Title title='Рассматриваю варианты удаленной работы'/>
            <div className={styles.btn_wrapper}>
                <MdBtn title='Нанять меня' />
            </div>
        </section>
    );
}