import * as React from "react";
import {ItemDescription, ItemDiv, ItemEvaluation, ItemPhoto, ItemTitle} from "./styled";
import {ItemType} from "./type";

export const Item = ({title, photo, evaluation, description}: ItemType) => {
    return <>
        <ItemDiv>
            <ItemTitle>{title}</ItemTitle>
            <ItemPhoto>{photo}</ItemPhoto>
            <ItemEvaluation>{evaluation}</ItemEvaluation>
            <ItemDescription>{description}</ItemDescription>
        </ItemDiv>
    </>
}