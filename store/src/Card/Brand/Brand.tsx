import React from "react";
import { IImages } from "../../interfaces/card/interface";

export const Brand = (props: IImages) => {
    return (
        <h2>{props.brand}</h2>
    )
}