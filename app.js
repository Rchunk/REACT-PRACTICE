import React from "react";
import ReactDOM from "react-dom/client";


//React components
//class based component-old way
//functional component-NEW

const Rahulcomponent= () => {
    return <h1>namaste rahul functional component</h1>
};

const jsxheading = <h1 className="head">namaste react using jsx!</h1>
console.log(jsxheading);


const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);





