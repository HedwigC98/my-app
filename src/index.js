//this is the imports:
import React from "react"; // this is the react package we need to write react
import ReactDOM from "react-dom/client"; // this connects the react package to the DOM(document object model of the browser). IS USED FOR WEBSITES
//the reason these first two are seperated is because react can be used to develop a lot of things(webpages, mobile apps ect)
import "./index.css"; // this is the css for all of the app
import reportWebVitals from "./reportWebVitals"; // ./ means the file is in the same directory, meaning in the src folder
import "tachyons";
import App from "../src/containers/App"; // the father of all the components
import { robots } from "./robots";
import CardList from "../src/components/CardList";

// Index JS is the entry point of our app, first file.  The first thing that is read by the computer

//this is the new way(React 18) of  writing react files:

//ReactDOM ==
// Render() meaning show on the page

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //REACT.STRICTMODE GIVES EXTRA PROTECTION, WEB SAFETY???
  <React.StrictMode>
    <div>
      <App />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals(); // REPORTWEBVITALS????
