import React from "react";
import BookList from "../book/BookList";

const HomePage = () => {
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

    return (
        <div>
            {/*//* Slider */}
            <div>
                <div>
                    <img
                        src="https://hanoibookstore.com/storage/kaixin-1.png"
                        alt="Image Slider"
                    />
                </div>
            </div>

            {/*//* List Category  */}
            <BookList
                full={false}
                books={enhancedData}
                title="Best Seller"
            ></BookList>
            <BookList
                full={false}
                books={enhancedData}
                title="Classics"
            ></BookList>
            <BookList
                full={false}
                books={enhancedData}
                title="Children"
            ></BookList>
        </div>
    );
};

export default HomePage;
