import "./App.css";
import Greet from "./components/Greet.jsx";
import Welcome from "./components/Welcome.jsx";
import Message from "./components/Message.jsx";
import Counter from "./components/Counter.jsx";
import Form from "./components/Form.jsx";

function App() {
    return (
        <div className="App">
            <Form />
            {/* <Counter />
            <Message />
            <Greet name="Ivan">
                <p>This is children props</p>
            </Greet>
            <Welcome name="Ivan" /> */}
        </div>
    );
}

export default App;
