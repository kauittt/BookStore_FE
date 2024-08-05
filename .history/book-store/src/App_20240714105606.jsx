import Login from "./components/login-signup/Login";
import BookItem from "./components/book/BookItem";

const App = () => {
    //! Width - Height: 1536 - 703
    //! 270 - 255
    //! Width: 0.9
    //! Height: 0.585

    //* Semibold - Normal
    //* 3xl - lg - Normal
    return (
        <div className="text-text-normal">
            {/* <BookItem
                image="https://static.vecteezy.com/system/resources/previews/009/399/398/original/old-vintage-book-clipart-design-illustration-free-png.png?al812797"
                price="5.9"
                name="Dune"
                author="Frank Herbert"
            ></BookItem> */}
            <Login></Login>
        </div>
    );
};

export default App;
