import React from "react";
import Button from "./components/elements/Button";

const App = () => {
    return (
        <div>
            <Button content="Login" main={false}></Button>
            <p>---</p>
            <Button content="Register" main={true}></Button>
        </div>
    );
};

export default App;
