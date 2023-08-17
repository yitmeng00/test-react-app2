// Functional component
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
    return (
        <React.Fragment>
            <h1>Hello {props.name}</h1>
            {props.children}
        </React.Fragment>
    );
};

// default export method, can import it in app.js with any name, for eg: "import GreetComponent from './components/Greet.jsx';"
export default Greet;

// Destructuring props and state
/*
const Greet = ({name, children}) => {
    return (
        <React.Fragment>
            <h1>Hello {name}</h1>
            {children}
        </React.Fragment>
    );
};

export default Greet;
*/

/*
const Greet = (props) => {
    const {name, children} = props;
    return (
        <React.Fragment>
            <h1>Hello {name}</h1>
            {children}
        </React.Fragment>
    );
};

export default Greet;
*/