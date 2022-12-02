import React from "react";
import Tweet from "./Tweet";

const Tweets = (props) => {
  const data = [
    {
      id: 1,
      name: "Double Cheeseburger",
      category: "burger",
      image:
        "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
      price: "$$$$",
    },

    {
      id: 5,
      name: "Feta & Spinnach",
      category: "pizza",
      image:
        "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      price: "$$",
    },
    {
      id: 6,
      name: "Supreme Pizza",
      category: "pizza",
      image:
        "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      price: "$$$",
    },

    {
      id: 11,
      name: "Loaded Salad",
      category: "salad",
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      price: "$$$$",
    },
  ];

  return (
    /* <div>
      <Tweet me={props.me} img={props.img} love={props.love} />
      <Tweet me={props.me} img={props.img} love={props.love} />
      <Tweet me={props.me} img={props.img} love={props.love} />
    </div>*/

    <div>
      {data.map((datas) => (
        <Tweet
          name={datas.name}
          category={datas.category}
          y
          image={datas.image}
        />
      ))}
    </div>
  );
};

export default Tweets;
