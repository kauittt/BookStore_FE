import { useSelector } from "react-redux";
import Cart from "../cart/Cart";
import { selectCart } from "../../redux/Reducer/cartSlice";

const CartPage = () => {
    const data = [
        {
            image: "https://nhasachphuongnam.com/images/thumbnails/240/290/detailed/287/con-duong-hoi-giao-tb-2024.jpg",
            price: "5.9",
            name: "Dune Frank",
            author: "Frank",
            quantity: 42,
            description:
                "An emotional journey through love, loss, and redemption.",
        },
        {
            image: "https://i.pinimg.com/474x/57/70/55/5770553158ceac5870925fd79f9699eb.jpg",
            price: "7.5",
            name: "1984",
            author: "George Orwell",
            quantity: 17,
            description: "An exploration of society and class struggles.",
        },
        {
            image: "https://listsach.com/wp-content/uploads/2020/05/bia-sach-dep-ngoi-nha-nghin-hanh-lang.jpg",
            price: "6.8",
            name: "Brave New World",
            author: "Aldous Huxley",
            quantity: 64,
            description:
                "A gripping narrative that captivates the reader from start to finish.",
        },
        {
            image: "https://listsach.com/wp-content/uploads/2020/05/quyen-sach-co-bia-dep-khong-gia-dinh.jpg",
            price: "8.39",
            name: "Fahrenheit 451",
            author: "Ray Bradbury",
            quantity: 80,
            description: "A thrilling tale of adventure and discovery.",
        },
        {
            image: "https://salt.tikicdn.com/cache/w1200/ts/product/03/ee/cc/9e91a112fb77049e9167f41ef62f832e.jpeg",
            price: "45.99",
            name: "The Catcher in the Rye",
            author: "J.D. Salinger",
            quantity: 22,
            description: "A masterpiece of modern literature.",
        },
        {
            image: "https://intamphuc.vn/wp-content/uploads/2023/06/mau-bia-sach-dep-4.jpg",
            price: "9.2",
            name: "To Kill a Mockingbird",
            author: "Harper Lee",
            quantity: 54,
            description:
                "A thought-provoking story that challenges conventional wisdom.",
        },
        {
            image: "https://vietart.co/blog/wp-content/uploads/2014/01/2_thiet_ke_bia_sach_dep_20.jpg",
            price: "5.0",
            name: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            quantity: 9,
            description:
                "A timeless classic that delves into the human psyche.",
        },
        {
            image: "https://thegioidohoa.com/wp-content/uploads/2017/08/tong-hop-20-mau-bia-sach-doc-dao-nhat-nam-2017-7.jpg",
            price: "6.5",
            name: "Moby Dick",
            author: "Herman Melville",
            quantity: 28,
            description: "A poignant reflection on the complexities of life.",
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVxy22da304ThgqLt9eKkHoYNLhIEgOL5vLCuA0X--bl323dKTKr0Q_H8tqkGQcfgcqA8&usqp=CAU",
            price: "7.8",
            name: "War and Peace",
            author: "Leo Tolstoy",
            quantity: 47,
            description: "A profound exploration of philosophical themes.",
        },
        {
            image: "https://intamphuc.vn/wp-content/uploads/2023/06/mau-bia-sach-dep-2.jpg",
            price: "6.0",
            name: "Pride and Prejudice",
            author: "Jane Austen",
            quantity: 68,
            description: "An unforgettable story of courage and resilience.",
        },
    ];

    const cart = useSelector(selectCart);
    return (
        <div className="container mx-auto pb-[50px]">
            <Cart books={cart}></Cart>
        </div>
    );
};

export default CartPage;
