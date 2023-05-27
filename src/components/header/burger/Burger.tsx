import React, { useState, useRef, useEffect } from 'react';
import styles from './Burger.module.css'
import MobileMenu from "../../mobileMenu/MobileMenu";

export default function Burger() {
    const [isActive, setIsActive] = useState(false);
    const burgerRef = useRef(null);

    const handleClick = () => {
        setIsActive(!isActive);
    }

    const handleMenuClick = () => {
        setIsActive(false);
    }

    useEffect(() => {
        if (burgerRef.current && isActive) {
            document.body.style.overflow = 'hidden'; // отключаем скролл
        } else {
            document.body.style.overflow = ''; // включаем скролл
        }
    }, [isActive]);

    return (
        <>
            <div
                className={`${styles.hamburger} ${styles.hamburger_1} ${
                    isActive ? styles.is_active : ""
                }`}
                onClick={handleClick}
                ref={burgerRef}
            >
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
            </div>
            {isActive && <MobileMenu onMenuClick={handleMenuClick} />}
        </>
    );
}
