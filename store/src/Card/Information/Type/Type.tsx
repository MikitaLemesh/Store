import React from "react";
import { IInfo } from "../../../interfaces/card/interface";

export const Type = (props: IInfo) => {
    return (
        <li>{`Type: ${props.type}`}</li>
    )
}