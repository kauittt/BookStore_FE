import PropTypes from "prop-types";
import ManageList from "../admin/ManageList";
import AdminNav from "../admin/AdminNav";
import Card from "../elements/Card";
import ManageTitle from "../admin/ManageTitle";
import {
    faCircleUser,
    faCartShopping,
    faHandHoldingDollar,
    faList,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { selectTotalUsers } from "../../redux/Reducer/userSlice";
import { selectBook, selectTotalBook } from "../../redux/Reducer/bookSlice";
import { selectCart } from "../../redux/Reducer/cartSlice";
import { selectTotalOrders } from "../../redux/Reducer/orderSlice";
import { useEffect, useState } from "react";

const AdminPage = () => {
    //! Card: quantity, CRUD -> update Card
    //! ManageTitle: name, button
    //! ManageList: books (xem lại data - redux)

    // STT | Tên khách | Tên sách | Số lượng | Giá     | Phone | Address
    // STT | Hình      | Tên sách | Danh mục | Tồn kho | Giá   | Mô tả
    // STT | Username  | Name     | Role     | Email   | Phone | Address

    const users = useSelector(selectTotalUsers);
    const books = useSelector(selectTotalBook);
    const booksGrouped = useSelector(selectBook);
    const cart = useSelector(selectCart);
    const orders = useSelector(selectTotalOrders);

    //! Just for console.log
    console.log("BOOK");
    console.log(books);
    console.log("USER");
    console.log(users);
    console.log("CART");
    console.log(cart);
    console.log("ORDERS");
    console.log(orders);

    const [content, setContent] = useState("book");
    const [data, setData] = useState(null);

    useEffect(() => {
        switch (content) {
            case "book":
                setData(books);
                break;
            case "user":
                setData(users);
                break;
            case "order":
                setData(orders);
                break;
            case "cart":
                setData(cart);
                break;
            default:
                setData([]);
        }
    }, [content, books, orders, users, cart]);

    const titleMap = {
        book: "Manage Books",
        user: "Manage Users",
        order: "Manage Orders",
        cart: "Manage Cart",
    };

    const buttonMap = {
        book: "Add Book",
        user: "Add User",
        order: "Add Order",
        cart: "Add Cart Item",
    };
    return (
        <div
            className="flex gap-[30px] justify-between h-screen
        max-h-screen overflow-hidden
        "
        >
            {/*//* Left  */}
            <AdminNav setContent={setContent}></AdminNav>

            {/*//* Right  */}
            <div className="flex flex-col gap-[20px] pt-[20px] pr-[20px]">
                {/*//* Cards  */}
                <div className="flex justify-between items-center ">
                    <Card
                        name="Product"
                        quantity={books?.length}
                        icon={faList}
                    ></Card>
                    <Card
                        name="Customer"
                        quantity={users?.length}
                        icon={faCircleUser}
                    ></Card>
                    <Card
                        name="Order"
                        quantity={orders?.length}
                        icon={faHandHoldingDollar}
                    ></Card>
                    <Card
                        name="Category"
                        quantity={booksGrouped?.length}
                        icon={faCartShopping}
                    ></Card>
                </div>

                {/*//* Title  */}
                {/* Title */}
                <ManageTitle
                    name={titleMap[content]}
                    button={buttonMap[content]}
                />

                {/*//* List  */}
                <ManageList books={data}></ManageList>
            </div>
        </div>
    );
};

AdminPage.propTypes = {
    books: PropTypes.array,
};
export default AdminPage;
