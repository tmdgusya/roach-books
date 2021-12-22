import React from "react";
import {Item} from "../item/Item";
import {ItemType} from "../item/type";
import {HeadLine} from "./styled";

interface MainCategoryType {
    headLine: string;
    database: ItemType[]
}


export default function MainCategory({headLine, database}: MainCategoryType) {

    return <>
        <HeadLine>{headLine}</HeadLine>
        {database.map((item, index) => {
            return <Item
                key={index}
                title={item.title}
                href={item.href}
                photo={item.photo}
                suggestion={item.suggestion}
                evaluation={item.evaluation}
                descriptions={item.descriptions}
            />
        })}
    </>
}