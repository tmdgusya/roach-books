import * as React from "react";
import {ItemDescription, ItemDiv, ItemEvaluation, ItemLink, ItemPhoto, ItemSuggestion, ItemTitle} from "./styled";
import {ItemType} from "./type";
import StarRatingComponent from 'react-star-rating-component';

export const Item = ({title, evaluation, href, photo, suggestion, descriptions}: ItemType) => {
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
            <ItemSuggestion>추천하는 사람 : {suggestion}</ItemSuggestion>
            {descriptions.map(description => {
                return <>
                    <ItemDescription>{description}<br/></ItemDescription>
                </>
            })}
        </ItemDiv>
    </>
}