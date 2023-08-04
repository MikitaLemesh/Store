import React from "react";
import styles from './card.module.css';
import { ICard } from "../interfaces/card/interface";
import { ImagesProduct } from "./ImageProduct/ImagesProduct";
import { Information } from "./Information/Information";
import { CardButtons } from "./CardButtons/CardButtons";
 
export const Card = (props: ICard) => {
    return (
        <div>
            <div>
                <ImagesProduct imageFirst={props.card.imageFirst} name={props.card.brand} />
                <Information stock={props.card.stock} type={props.card.type} rating={props.card.rating} price={props.card.price}/>
            </div>
            <CardButtons />
        </div>
    )
}