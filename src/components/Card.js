import React from "react"; // this must be done in every component so this syntax can be read(jsx = html like syntax)

//DESTRUCTURING???
const Card = (props) => {
  //props??  predefined keyword
  const { name, email, id } = props; // you could also put it into the Card FUNCTION arguments
  return (
    // in the return you can only return one thing so everything must be wrapped in a surrounding div element
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow2">
      <img
        src={`https://robohash.org/${props.id}.png?size=200x200`}
        alt="robot"
      ></img>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
