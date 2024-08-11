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
        const mapOrderData = (orders) => {
            return orders.map((order) => {
                const bookNames = order.books
                    .map((b) => b.book.name)
                    .join(", ");
                const totalQuantity = order.books.reduce(
                    (sum, b) => sum + b.orderQuantity,
                    0
                );
                const totalPrice = order.books.reduce(
                    (sum, b) => sum + b.orderQuantity * b.book.price,
                    0
                );

                return {
                    field1: order.name,
                    field2: bookNames,
                    field3: totalQuantity,
                    field4: totalPrice + "$",
                    field5: order.phone,
                    field6: order.address,
                };
            });
        };

        const mapUserData = (users) => {
            return users.map((user) => {
                const authorities = user.authorities
                    .map((a) => a.authority.replace("ROLE_", ""))
                    .join(", ");

                return {
                    field1: user.username,
                    field2: user.name,
                    field3: authorities,
                    field4: user.email,
                    field5: user.phone,
                    field6: user.address,
                };
            });
        };

        const mapBookData = (books) => {
            return books.map((book) => {
                return {
                    field1: book.name + " - " + book.author,
                    field2: book.category,
                    field3: book.quantity,
                    field4: book.price + "$",
                    field5: book.description,
                    field6: book.image,
                };
            });
        };

        switch (content) {
            case "book":
                setData(mapBookData(books));
                break;
            case "user":
                setData(mapUserData(users));
                break;
            case "order":
                setData(mapOrderData(orders));
                break;
            default:
                setData([]);
        }
    }, [content, books, orders, users]);

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
                <ManageList data={data} content={content}></ManageList>
            </div>
        </div>
    );
};

AdminPage.propTypes = {
    books: PropTypes.array,
};
export default AdminPage;
