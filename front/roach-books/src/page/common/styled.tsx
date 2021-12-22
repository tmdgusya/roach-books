import styled from "styled-components";
// @ts-ignore
import myImag from "../../aaa.jpeg"

export const RoachBooksTitle = styled.h1`
    size: 80px;
`

export const Message = styled.h1`
    margin-top: 70px;
`

export const HeadLine = styled.h1`
    margin-top: 50px;    
`

export const MainDiv = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: url(${myImag})
    `