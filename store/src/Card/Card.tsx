import React from "react";
import styles from './card.module.css';
import { ICard } from "../interfaces/card/interface";
import { ImagesProduct } from "./ImageProduct/ImagesProduct";
 
export const Card = (props: ICard) => {
    return (
        <ImagesProduct imageFirst={props.card.imageFirst} name={props.card.brand} />
    )
}