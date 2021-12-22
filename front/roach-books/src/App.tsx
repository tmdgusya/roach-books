import * as React from "react";
import {ItemType} from "./page/item/type";
import {Item} from "./page/item/Item";
import {HeadLine, MainDiv, RoachBooksTitle} from "./page/common/styled";

const mockData: ItemType[] = [{
  title: "클린 아키텍쳐",
  evaluation: 3.5,
  href: "http://www.yes24.com/Product/Goods/77283734",
  photo: "https://user-images.githubusercontent.com/57784077/147131649-a96b5a67-b12f-4897-a2c9-72917989929f.png",
  descriptions: ["그냥 강추, 개인적으로 무조건 읽어야 하는 책이라고 생각한다.", "어떻게 컴퓨터 아키텍쳐가 발전되어 왔는지 머리속에 구조를 잡아주는 책, 좋은 코드란 무엇인지에 대한 갈피도 잡을 수 있다고 생각함."]
}, {
  title: "Real MySQL",
  evaluation: 4.5,
  photo: "https://user-images.githubusercontent.com/57784077/147132332-e6463f46-8b20-4a61-9c96-7e79baed030d.png",
  href: "http://www.yes24.com/Product/Goods/6960931",
  descriptions: ["회사 가서 읽을 생각하면 되는 책 같다. ",
      "근데 2~5 장까지는 회사가기전에 디비공부를 열심히하는 사람이라면 읽어볼만한 내용이라고 생각된다.",
      "면접 질문 대비도 잘 할수 있고, 면접관들과 좋은 주제로 이야기 할 수 있겠다는 생각이 든다. (UPATE 2021-04-05)"]
}]

function App() {
  return (
    <MainDiv>
      <RoachBooksTitle>로치의 책방</RoachBooksTitle>
      <HeadLine>책 평점</HeadLine>
      {mockData.map((item, index) => {
        return <Item
            key={index}
            title={item.title}
            href={item.href}
            photo={item.photo}
            evaluation={item.evaluation}
            descriptions={item.descriptions}
        />
      })}
    </MainDiv>
  );
}

export default App;
