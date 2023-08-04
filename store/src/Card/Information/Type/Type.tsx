import React from "react";
import { IInfo } from "../../../interfaces/card/interface";
import styles from './type.module.css';

export const Type = (props: IInfo) => {
    return (
        <li className={styles.li__type}>{`Type: ${props.type}`}</li>
    )
}