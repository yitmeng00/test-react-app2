import "./App.css";
import Greet from "./components/Greet.jsx";
import Welcome from "./components/Welcome.jsx";

function App() {
    return (
        <div className="App">
            <Greet name="Ivan">
                <p>This is children props</p>
            </Greet>
            <Welcome />
        </div>
    );
}

export default App;
