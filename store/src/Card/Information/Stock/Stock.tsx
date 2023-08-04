import React from "react";
import { IInfo } from "../../../interfaces/card/interface";
import styles from './stock.module.css';

export const Stock = (props: IInfo) => {
    return (
        <li className={styles.li__stock}>{`Stock: ${props.stock}`}</li>
    )
}