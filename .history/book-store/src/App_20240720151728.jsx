import BookItem from "./components/book/BookItem";
import BookList from "./components/book/BookList";
import BookDetail from "./components/book/BookDetail";
import CartItem from "./components/cart/CartItem";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import AdminNav from "./components/admin/AdminNav";
import ManageList from "./components/admin/ManageList";
import AdminPage from "./components/admin/AdminPage";
import Card from "./components/elements/Card";
import Login from "./components/pages/Login";

const App = () => {
    //! Width - Height: 1536 - 703
    //! 270 - 255
    //! Width: 0.9
    //! Height: 0.585

    //* Semibold - Normal
    //* 3xl (Tiêu đề to) - lg (To hơn bình thường) - sm (Chú thích nhỏ) - Normal

    const data = [
        {
            image: "https://nhasachphuongnam.com/images/thumbnails/240/290/detailed/287/con-duong-hoi-giao-tb-2024.jpg",
            price: "5.9",
            name: "Dune Frank ",
            author: "Frank ",
        },
        {
            image: "https://i.pinimg.com/474x/57/70/55/5770553158ceac5870925fd79f9699eb.jpg",
            price: "7.5",
            name: "1984",
            author: "George Orwell",
        },
        {
            image: "https://listsach.com/wp-content/uploads/2020/05/bia-sach-dep-ngoi-nha-nghin-hanh-lang.jpg",
            price: "6.8",
            name: "Brave New World",
            author: "Aldous Huxley",
        },
        {
            image: "https://listsach.com/wp-content/uploads/2020/05/quyen-sach-co-bia-dep-khong-gia-dinh.jpg",
            price: "8.39",
            name: "Fahrenheit 451",
            author: "Ray Bradbury",
        },
        {
            image: "https://salt.tikicdn.com/cache/w1200/ts/product/03/ee/cc/9e91a112fb77049e9167f41ef62f832e.jpeg",
            price: "45.99",
            name: "The Catcher in the Rye",
            author: "J.D. Salinger",
        },
        {
            image: "https://intamphuc.vn/wp-content/uploads/2023/06/mau-bia-sach-dep-4.jpg",
            price: "9.2",
            name: "To Kill a Mockingbird",
            author: "Harper Lee",
        },
        {
            image: "https://vietart.co/blog/wp-content/uploads/2014/01/2_thiet_ke_bia_sach_dep_20.jpg",
            price: "5.0",
            name: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
        },
        {
            image: "https://thegioidohoa.com/wp-content/uploads/2017/08/tong-hop-20-mau-bia-sach-doc-dao-nhat-nam-2017-7.jpg",
            price: "6.5",
            name: "Moby Dick",
            author: "Herman Melville",
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVxy22da304ThgqLt9eKkHoYNLhIEgOL5vLCuA0X--bl323dKTKr0Q_H8tqkGQcfgcqA8&usqp=CAU",
            price: "7.8",
            name: "War and Peace",
            author: "Leo Tolstoy",
        },
        {
            image: "https://intamphuc.vn/wp-content/uploads/2023/06/mau-bia-sach-dep-2.jpg",
            price: "6.0",
            name: "Pride and Prejudice",
            author: "Jane Austen",
        },
    ];

    // Các mô tả mẫu để sử dụng
    const descriptions = [
        "A timeless classic that delves into the human psyche.",
        "An exploration of society and class struggles.",
        "A thrilling tale of adventure and discovery.",
        "A thought-provoking story that challenges conventional wisdom.",
        "A masterpiece of modern literature.",
        "A poignant reflection on the complexities of life.",
        "A gripping narrative that captivates the reader from start to finish.",
        "An emotional journey through love, loss, and redemption.",
        "A profound exploration of philosophical themes.",
        "An unforgettable story of courage and resilience.",
    ];

    // Hàm tạo số lượng ngẫu nhiên từ 1 đến 100
    function getRandomQuantity() {
        return Math.floor(Math.random() * 100) + 1;
    }

    // Hàm tạo mô tả ngẫu nhiên từ danh sách mô tả mẫu
    function getRandomDescription() {
        const index = Math.floor(Math.random() * descriptions.length);
        return descriptions[index];
    }

    // Tạo dữ liệu đa dạng cho mảng data
    const enhancedData = data.map((item) => ({
        ...item,
        quantity: getRandomQuantity(),
        description: getRandomDescription(),
    }));

    const detail = {
        image: "https://nhasachphuongnam.com/images/thumbnails/240/290/detailed/287/con-duong-hoi-giao-tb-2024.jpg",
        price: "5.9",
        name: "Dune",
        author: "Frank Herbert ",
        quantity: 10,
        description:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections",
    };

    //! Sửa chổ quantity*price trong tính cart, checkout

    //! Admin: Xem lại data
    return (
        // container mx-auto
        <div className="text-text-normal  cursor-default select-none">
            {/* <Card name="Sản phẩm" quantity="15" icon={faList}></Card> */}

            {/* <AdminPage books={enhancedData}></AdminPage> */}
            {/* <ManageList books={enhancedData}></ManageList> */}
            {/* <AdminNav></AdminNav> */}
            {/* <Checkout books={enhancedData}></Checkout> */}
            {/* <Cart books={enhancedData}></Cart> */}
            {/* <CartItem book={detail}></CartItem> */}
            {/* <BookDetail book={detail}></BookDetail> */}
            {/* <BookList title="Classic" books={data}></BookList> */}
            <Login></Login>
        </div>
    );
};

export default App;
