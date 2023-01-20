import React from "react";
import Card from "./Card";

//cardList is a deterministic aka pure function meaning if it receives the same input the oputput is always gonna be the same
//this amkes these components reusable because they dont really need to know about anything else(no dependencies)

const CardList = ({ robots }) => {
  // this ({robots }) is called restructuring and this is how you have acces to the robots file and can now use to acces the data
  if (true) {
    throw new Error("Noo");
  }

  //you could also use forEach but he reccomends using .map most of the time
  const cardArray = robots.map((user, i) => {
    // in a map you can pass 2 paramethers, one is ... and the second is the index
    // the  second paramether in tne map is the index
    return (
      <Card
        key={i} // the way that the virtual dom works is it keeps track of what all these cards are but without having
        //a key prop react wont know which one is which and it will have to chnage the entire DOM vs if you have a key
        //it will just remove that one
        //ALSO NB! kep prop should have something that doesnt change.. for ex index(i in our case) could change if array
        //items get mpved. So a better key in this case would be something unique like id
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      />
    );
  });
  return <div>{cardArray}</div>; // dont forget to wrap in curly brackets so that it knows to evaluate it as JS
};

export default CardList;
