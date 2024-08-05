import Login from "./components/login-signup/Login";
import BookItem from "./components/book/BookItem";
import BookList from "./components/book/BookList";

const App = () => {
    //! Width - Height: 1536 - 703
    //! 270 - 255
    //! Width: 0.9
    //! Height: 0.585

    //* Semibold - Normal
    //* 3xl - lg - sm - Normal

    const data = [
        {
            image: "https://static.vecteezy.com/system/resources/previews/009/399/398/original/old-vintage-book-clipart-design-illustration-free-png.png?al812797",
            price: "5.9",
            name: "Dune",
            author: "Frank Herbert",
        },
        {
            image: "https://static.vecteezy.com/system/resources/previews/009/399/398/original/old-vintage-book-clipart-design-illustration-free-png.png?al812797",
            price: "7.5",
            name: "1984",
            author: "George Orwell",
        },
        {
            image: "https://static.vecteezy.com/system/resources/previews/009/399/398/original/old-vintage-book-clipart-design-illustration-free-png.png?al812797",
            price: "6.8",
            name: "Brave New World",
            author: "Aldous Huxley",
        },
        {
            image: "https://static.vecteezy.com/system/resources/previews/009/399/398/original/old-vintage-book-clipart-design-illustration-free-png.png?al812797",
            price: "8.3",
            name: "Fahrenheit 451",
            author: "Ray Bradbury",
        },
        {
            image: "https://static.vecteezy.com/system/resources/previews/009/399/398/original/old-vintage-book-clipart-design-illustration-free-png.png?al812797",
            price: "4.9",
            name: "The Catcher in the Rye",
            author: "J.D. Salinger",
        },
        {
            image: "https://static.vecteezy.com/system/resources/previews/009/399/398/original/old-vintage-book-clipart-design-illustration-free-png.png?al812797",
            price: "9.2",
            name: "To Kill a Mockingbird",
            author: "Harper Lee",
        },
        {
            image: "https://static.vecteezy.com/system/resources/previews/009/399/398/original/old-vintage-book-clipart-design-illustration-free-png.png?al812797",
            price: "5.0",
            name: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
        },
        {
            image: "https://static.vecteezy.com/system/resources/previews/009/399/398/original/old-vintage-book-clipart-design-illustration-free-png.png?al812797",
            price: "6.5",
            name: "Moby Dick",
            author: "Herman Melville",
        },
        {
            image: "https://static.vecteezy.com/system/resources/previews/009/399/398/original/old-vintage-book-clipart-design-illustration-free-png.png?al812797",
            price: "7.8",
            name: "War and Peace",
            author: "Leo Tolstoy",
        },
        {
            image: "https://static.vecteezy.com/system/resources/previews/009/399/398/original/old-vintage-book-clipart-design-illustration-free-png.png?al812797",
            price: "6.0",
            name: "Pride and Prejudice",
            author: "Jane Austen",
        },
    ];

    return (
        <div className="text-text-normal p-[40px]">
            <BookList title="Classic" books={data}></BookList>
            {/* <Login></Login> */}
        </div>
    );
};

export default App;
