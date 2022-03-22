import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [getMessage, setGetMessage] = useState({});

    useEffect(() => {
        axios
            .get("http://localhost:5000/flask/hello")
            .then((resp) => {
                console.log("SUCCESS", resp);
                setGetMessage(resp);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <div>
                    {getMessage.status === 200 ? (
                        <h3>{getMessage.data.message}</h3>
                    ) : (
                        <h3>LOADING</h3>
                    )}
                </div>
            </header>
        </div>
    );
}

export default App;
