import React from "react";
import { IImages } from "../../interfaces/card/interface";
import styles from './imageProduct.module.css';

export const ImagesProduct = (props: IImages) => {
    return (
        <img
            src={props.imageFirst}
            alt={props.brand}
            className={styles.image}
        />
    )
}