import React from "react";
import ReactDOM from "react-dom/client";


//React components
//class based component-old way
//functional component-NEW

const RahulComponent= () => {
    (
        <div id="container">
            <h1>namaste rahul functional component</h1>
        </div>
        );
};

//const jsxheading = <h1 className="head">namaste react using jsx!</h1>
//console.log(jsxheading);


const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RahulComponent/>);





