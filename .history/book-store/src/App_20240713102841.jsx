import React from "react";
import Button from "./components/elements/Button";

const App = () => {
    return (
        <div>
            <Button content="Login" main={false} border={false}></Button>
            <p>---</p>
            <Button content="Register" main={true} border={true}></Button>
        </div>
    );
};

export default App;
