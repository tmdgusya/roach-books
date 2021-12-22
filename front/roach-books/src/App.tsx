import * as React from "react";
import {HeadLine, MainDiv, RoachBooksTitle} from "./page/common/styled";
import {commonBooks} from "./page/data/common";
import {databaseBook} from "./page/data/database";
import MainCategory from "./page/common/MainCategory";

function App() {
  return (
    <MainDiv>
        <RoachBooksTitle>로치의 책방</RoachBooksTitle>
        <HeadLine>책 평점</HeadLine>
        <MainCategory headLine={"공통적으로 읽어야 할 책"} database={commonBooks}/>
        <MainCategory headLine={"데이터베이스 부분 추천 책"} database={databaseBook}/>
    </MainDiv>
  );
}

export default App;
