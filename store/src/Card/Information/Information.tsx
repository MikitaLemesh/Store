import React from "react";
import { Type } from "./Type/Type";
import { Rating } from "./Rating/Rating";
import { Price } from "./Price/Price";
import { Stock } from "./Stock/Stock";
import { IInfo } from "../../interfaces/card/interface";

export const Information = (props: IInfo) => {
    return (
        <ul>
            <Type type={props.type}/>
            <Price price={props.price}/>
            <Rating rating={props.rating}/>
            <Stock stock={props.stock}/>
        </ul>
    )
}