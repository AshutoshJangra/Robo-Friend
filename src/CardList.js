import React from "react";
import Card from "../src/Components/Card";

const CardList = ({ robots }) => {
  //exract robots name and email from props one by one and pass it to card

  return (
    <div>
      {robots.map((user, i) => {
        return <Card key={i} name={robots[i].name} email={robots[i].email} />;
      })}
    </div>
  );
};

export default CardList;
