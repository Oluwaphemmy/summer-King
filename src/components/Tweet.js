import React from "react";

const Tweet = (props) => {
  return (
    /* <div>
      <h1>{props.me}</h1>
      <img src={props.img} />
      <h3>{props.love}</h3>
    </div>*/

    <div>
      <h1>{props.name} </h1>
      <h1>{props.category} </h1>
      <img src={props.image} />
    </div>
  );
};

export default Tweet;
