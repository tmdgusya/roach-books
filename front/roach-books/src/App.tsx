import * as React from "react";
import {ItemType} from "./page/item/type";
import {Item} from "./page/item/Item";

const mockData: ItemType[] = [{
  title: "React 를 다루는 기술",
  photo: "https://www.naver.com",
  evaluation: 5,
  description: "로치의 리액트를 배운다면 꼭 읽어야 할 책!"
}]

function App() {
  console.log("roach");
  return (
    <div>
      <p>"12312312"</p>
      {mockData.map((item, index) => {
        return <Item
            key={index}
            title={item.title}
            photo={item.photo}
            evaluation={item.evaluation}
            description={item.description}
        />
      })}
    </div>
  );
}

export default App;
