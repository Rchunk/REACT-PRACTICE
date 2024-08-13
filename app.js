import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images/download.png";
import "./app.css";
import usericon from "./images/raman.png";

//React components
//class based component-old way
//functional component-NEW

//const Title = () =>(

 //<h1 className="head">namaste react using jsx!</h1>);



//Component composition
/*const HeadingComponent= () => 
    (
        <div id="container">
            <h2>{100/20}</h2>
            <h1>namaste rahul functional component</h1>
        </div>
    );

//const jsxheading = <h1 className="head">namaste react using jsx!</h1>
//console.log(jsxheading);*/

/*Create a Header Component from scratch using Functional Components with
JSX
○ Add a Logo on left
○ Add a search bar in middle
○ Add User icon on right
○ Add CSS to make it look nice*/

const HeaderComponent = () =>(
    <div class ="header">
        <div id="logo" >
            <img src= {logo}></img>
        </div>

        <div id ="input">
            <b><label>Search bar:   </label></b><input type = "text"></input>
        </div>

        <div id="user">
            <img src={usericon}></img>
        </div>
    </div>
    
       
);


const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);





