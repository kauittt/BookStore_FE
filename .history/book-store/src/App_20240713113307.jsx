import Input from "./components/elements/Input";

const App = () => {
    return (
        <div>
            <form action="">
                <Input name="Name"></Input>
                <Input name="Email"></Input>
                <Input name="Password" isPassword={true}></Input>
            </form>
        </div>
    );
};

export default App;
