import React from "react";

/*
function Greet() {
    return <h1>Hello Ivan</h1>
}
*/

// name export method, need import it with the exact same name, for eg: "import { Greet } from './components/Greet.jsx';"
/*
export const Greet = () => <h1>Hello Ivan</h1>
*/

const Greet = (props) => {
    return <h1>Hello {props.name}</h1>;
};

// default export method, ucan import it in app.js with any name, for eg: "import GreetComponent from './components/Greet.jsx';"
export default Greet;
