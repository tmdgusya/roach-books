import * as React from "react";
import {HeadLine, MainDiv, Message, RoachBooksTitle} from "./page/common/styled";
import {commonBooks} from "./page/data/common";
import {databaseBook} from "./page/data/database";
import MainCategory from "./page/common/MainCategory";
import {springBooks} from "./page/data/spring";
import {javaBooks} from "./page/data/java";
import {ItemLink} from "./page/item/styled";
import {kotlinBooks} from "./page/data/kotlin";
import {inflearn} from "./page/data/inflearn";

function App() {
  return (
    <MainDiv>
        <RoachBooksTitle>로치의 책방</RoachBooksTitle>
        <HeadLine>책 평점</HeadLine>
        <MainCategory headLine={"공통적으로 읽어야 할 책"} database={commonBooks}/>
        <MainCategory headLine={"데이터베이스 부분 추천 책"} database={databaseBook}/>
        <MainCategory headLine={"Spring 부분 추천 책"} database={springBooks}/>
        <MainCategory headLine={"Java 부분 추천 책"} database={javaBooks}/>
        <MainCategory headLine={"Kotlin 부분 추천 책"} database={kotlinBooks}/>
        <HeadLine>인프런🌱</HeadLine>
        <MainCategory headLine={"인프런 강의 추천 (홍보없음 내돈-내산 인증가능)"} database={inflearn}/>
        <Message>오타 제보 및 책 추천은 아래 이슈에 등록해주세요!</Message>
        <ItemLink
            href={"https://github.com/tmdgusya/roach-books/issues"}
            target={"_blank"}
            rel="noreferrer"
        >오류제보 및 책 추천</ItemLink>
    </MainDiv>
  );
}

export default App;
