import * as React from "react";
import {ItemDescription, ItemDiv, ItemEvaluation, ItemPhoto, ItemTitle} from "./styled";
import {ItemType} from "./type";

export default function Item(items: ItemType[]) {
    return <ItemDiv>
        {items.map((item) => {
          return <>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemPhoto>{item.photo}</ItemPhoto>
                <ItemEvaluation>{item.evaluation}</ItemEvaluation>
                <ItemDescription>{item.description}</ItemDescription>
            </>
        })}
    </ItemDiv>
}