import React from "react";
import { ButtonDetails } from "./ButtonDetails/ButtonDetails";
import { ButtonAdd } from "./ButtonAdd/ButtonAdd";
import styles from './cardButtons.module.css';

export const CardButtons = () => {
    return (
        <div className={styles.div__btns}>
            <ButtonAdd />
            <ButtonDetails />
        </div>
    )
}