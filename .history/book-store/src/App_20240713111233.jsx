import React from "react";
import Button from "./components/elements/Button";
import { Input } from "postcss";

const App = () => {
    return (
        <div>
            <Input name="Name"></Input>
            <Input name="Email"></Input>
            <Input name="Password"></Input>
        </div>
    );
};

export default App;
