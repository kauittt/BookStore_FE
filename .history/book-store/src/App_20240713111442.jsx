import React from "react";
import Button from "./components/elements/Button";
import { Input } from "postcss";

const App = () => {
    return (
        <div>
            <form action="">
                <Input name="Name"></Input>
                <Input name="Email"></Input>
                <Input name="Password"></Input>
            </form>
        </div>
    );
};

export default App;
