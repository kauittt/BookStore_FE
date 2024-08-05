import React from "react";
import Button from "./components/elements/Button";

const App = () => {
    return (
        <div>
            <Button content="Đăng nhập" main={true} border={true}></Button>
            <Button content="Đăng ký" main={false} border={false}></Button>
        </div>
    );
};

export default App;
