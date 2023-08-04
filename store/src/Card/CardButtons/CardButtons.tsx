import React from "react";
import { ButtonDetails } from "./ButtonDetails/ButtonDetails";
import { ButtonAdd } from "./ButtonAdd/ButtonAdd";

export const CardButtons = () => {
    return (
        <div>
            <ButtonAdd />
            <ButtonDetails />
        </div>
    )
}