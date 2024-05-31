import styles from './AnimatedBtn.module.css';
import React from 'react';

type AnimatedBtnProps = {
    isActive : boolean
    setIsActive : React.Dispatch<React.SetStateAction<boolean>>
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
    menuOpen : boolean
}

const Animatedbtn = ({ isActive , setIsActive, setMenuOpen, menuOpen} : AnimatedBtnProps) => {

    const handleClick = () => {
        setIsActive(!isActive);
        setMenuOpen(!menuOpen)
    };

    return (
        <button className={isActive ? styles.menu_btn_active : styles.menu_btn} onClick={() => handleClick()}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
        </button>
    );
};

export default Animatedbtn