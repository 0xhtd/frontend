// import { STATUS } from "../../../types/enum";
// import ToiletCard from "../Cards/ToiletCard";

// const ListOfRestrooms = () => {
  // const prop = {
  //   name:"OFFICE TOWER",
  //   location:{ lat: 42.195, lon: 92.112 },
  //   type:"man",
  //   entranceFee:5,
  //   additionalFee:1,
  //   cleanScore:4,
  //   available:true,
  //   status:STATUS["working"],
  // }
  // const items = [];
  
  // const CardList = ({ items }) => (
  //   <div className="card-list">
  //     {/* {items.map((item, index) => (
  //       <Card key={index} item={item} />
  //     ))} */}
  //     <ToiletCard props={prop}
        
  //     />
  //     <ToiletCard
  //       name="Royal Building"
  //       location={{ lat: 42.295, lon: 92.111 }}
  //       type={"woman"}
  //       entranceFee={3}
  //       additionalFee={2}
  //       cleanScore={5}
  //       available={false}
  //       status={STATUS["cleaning"]}
  //     />
  //     <ToiletCard
  //       name="Central Tower"
  //       location={{ lat: 42.198, lon: 92.113 }}
  //       type={"man"}
  //       entranceFee={5}
  //       additionalFee={1}
  //       cleanScore={2}
  //       available={false}
  //       status={STATUS["repairing"]}
  //     />
  //   </div>
  // );


  // return (
  //   <div className="App">
  //     <CardList items={items} />
  //   </div>
    // <div>
    //   <div className="scroll-pl-6 snap-x">
    //     <div className="flex space-x-4">
    //       <ToiletCard
    //         name="OFFICE TOWER"
    //         location={{ lat: 42.195, lon: 92.112 }}
    //         type={"man"}
    //         entranceFee={5}
    //         additionalFee={1}
    //         cleanScore={4}
    //         available={true}
    //         status={STATUS["working"]}
    //       />
    //       <ToiletCard
    //         name="Royal Building"
    //         location={{ lat: 42.295, lon: 92.111 }}
    //         type={"woman"}
    //         entranceFee={3}
    //         additionalFee={2}
    //         cleanScore={5}
    //         available={false}
    //         status={STATUS["cleaning"]}
    //       />
    //       <ToiletCard
    //         name="Central Tower"
    //         location={{ lat: 42.198, lon: 92.113 }}
    //         type={"man"}
    //         entranceFee={5}
    //         additionalFee={1}
    //         cleanScore={2}
    //         available={false}
    //         status={STATUS["repairing"]}
    //       />
    //     </div>
    //   </div>
    // </div>
//   );
// };

// export default ListOfRestrooms;
import React from 'react';
import './ListofToilets.css';

type item = {title:string, description:string}

const Card = ({ item }:{item:item}) => (
  <div className="card">
    <h2>{item.title}</h2>
    <p>{item.description}</p>
  </div>
);

const CardList = ({ items }:{items:item[]}) => (
  <div className="card-list">
    {items.map((item, index) => (
      <>
      <Card key={index} item={item} />
      </>
    ))}
  </div>
);

function ListOfToilets() {
  const items = [
    // 이곳에 카드 데이터를 추가하세요.
    { title: 'Title 1', description: 'Description 1' },
    { title: 'Title 2', description: 'Description 2' },
    { title: 'Title 2', description: 'Description 2' },
    { title: 'Title 2', description: 'Description 2' },
    { title: 'Title 2', description: 'Description 2' },
    { title: 'Title 2', description: 'Description 2' },
    { title: 'Title 2', description: 'Description 2' },
    { title: 'Title 2', description: 'Description 2' },
    { title: 'Title 2', description: 'Description 2' },
    { title: 'Title 2', description: 'Description 2' },
    { title: 'Title 2', description: 'Description 2' },
    // ...
  ];

  return (
    <div className="App">
      <CardList items={items} />
    </div>
  );
}

export default ListOfToilets;
