import React from "react";
import { IImages } from "../../interfaces/card/interface";

export const ImagesProduct = (props: IImages) => {
    return (
        <img
            src={props.imageFirst}
            alt={props.name}
        />
    )
}