import * as React from "react";
import {ItemDescription, ItemDiv, ItemEvaluation, ItemLink, ItemPhoto, ItemTitle} from "./styled";
import {ItemType} from "./type";
import StarRatingComponent from 'react-star-rating-component';

export const Item = ({title, evaluation, href, photo, descriptions}: ItemType) => {
    return <>
        <ItemDiv>
            <ItemTitle>{title}</ItemTitle>
            <StarRatingComponent
                name={"평점"}
                value={evaluation}
                editing={false}
            />
            <ItemPhoto src={photo}/>
            <ItemLink href={href} target={"_blank"} rel="noreferrer">{title} 판매처</ItemLink>
            {descriptions.map(description => {
                return <>
                    <ItemDescription>{description}<br/></ItemDescription>
                </>
            })}
        </ItemDiv>
    </>
}