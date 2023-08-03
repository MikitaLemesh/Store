import React from "react";
import { IInfo } from "../../../interfaces/card/interface";

export const Price = (props: IInfo) => {
    return (
        <li>{`Price: ${props.price}$`}</li>
    )
}