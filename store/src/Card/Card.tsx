import React from "react";
import styles from './card.module.css';
import { ICard } from "../interfaces/card/interface";
import { ImagesProduct } from "./ImageProduct/ImagesProduct";
import { Information } from "./Information/Information";
 
export const Card = (props: ICard) => {
    return (
        <div>
            <ImagesProduct imageFirst={props.card.imageFirst} name={props.card.brand} />
            <Information />
        </div>
    )
}