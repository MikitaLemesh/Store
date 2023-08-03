import React from "react";
import { IInfo } from "../../../interfaces/card/interface";

export const Stock = (props: IInfo) => {
    return (
        <li>{`Stock: ${props.stock}`}</li>
    )
}