import "./App.css";
import Greet from "./components/Greet.jsx";
import Welcome from "./components/Welcome.jsx";
import Message from "./components/Message.jsx";

function App() {
    return (
        <div className="App">
            <Message />
            {/* <Greet name="Ivan">
                <p>This is children props</p>
            </Greet>
            <Welcome name="Ivan" /> */}
        </div>
    );
}

export default App;
