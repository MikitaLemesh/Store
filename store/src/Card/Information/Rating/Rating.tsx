import React from "react";
import { IInfo } from "../../../interfaces/card/interface";

export const Rating = (props: IInfo) => {
    return (
        <li>{`Rating: ${props.rating}`}</li>
    )
}