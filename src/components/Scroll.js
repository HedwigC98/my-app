import React from "react"; // this import is the first thing you do in these components.

//the arrow function syntax

//Scroll/  can use children as a way to render its children
//scroll child is the Cardlist object
//

const Scroll = (props) => {
  return (
    <div
      //why double curly brackets???
      style={{
        overflowY: "scroll",
        border: "5px, solid, black",
        height: "500px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll; // dotnt forget to export always
