import React from "react";
import styled from "styled-components";

export default function ProfileComponent() {

    const GITHUB_URL = "https://github.com/tmdgusya";
    const BLOG_URL = "https://devroach.tistory.com/";
    const COMPANY = "우아한 형제들";

    return <ProfileDiv>
        <a href={GITHUB_URL} target={"_blank"} rel="noreferrer">
            <i style={{fontSize: "30px", marginRight: "30px"}} id="git" className="fab fa-github"/>
        </a>
        <a href={BLOG_URL} target={"_blank"} rel="noreferrer">
            <i style={{fontSize: "30px", marginRight: "30px"}} className="fab fa-microblog"/>
        </a>
        <p>소속 : {COMPANY}</p>
    </ProfileDiv>
}

const ProfileDiv = styled.div`
    display: flex;
    align-items: center;
`

