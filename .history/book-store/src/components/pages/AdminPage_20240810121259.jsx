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
    //! book CRUD
    //! user UD
    //! order UD

    // STT | Tên khách | Tên sách | Số lượng | Giá     | Phone | Address
    // STT | Hình      | Tên sách | Danh mục | Tồn kho | Giá   | Mô tả
    // STT | Username  | Name     | Role     | Email   | Phone | Address

    const users = useSelector(selectTotalUsers);
    const books = useSelector(selectTotalBook);
    const booksGrouped = useSelector(selectBook);
    const cart = useSelector(selectCart);
    const orders = useSelector(selectTotalOrders);

    useEffect(() => {
        console.log("Books updated:", books);
        console.log("Orders updated:", orders);
        console.log("Users updated:", users);
    }, [books, orders, users]);

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
            const orderMapping = {
                field0: "id",
                field1: "name",
                field2: "bookNames",
                field3: "totalQuantity",
                field4: "totalPrice",
                field5: "phone",
                field6: "address",
            };

            const orderData = orders?.map((order) => {
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
                    field0: order.id,
                    field1: order.name,
                    field2: bookNames,
                    field3: totalQuantity,
                    field4: totalPrice + "$",
                    field5: order.phone,
                    field6: order.address,
                };
            });

            return { data: orderData, mapping: orderMapping };
        };

        const mapUserData = (users) => {
            const userMapping = {
                field0: "id",
                field1: "username",
                field2: "name",
                field3: "authorities",
                field4: "email",
                field5: "phone",
                field6: "address",
            };

            const userData = users?.map((user) => {
                const authorities = user.authorities
                    .map((a) => a.authority.replace("ROLE_", ""))
                    .join(", ");

                return {
                    field0: user.id,
                    field1: user.username,
                    field2: user.name,
                    field3: authorities,
                    field4: user.email,
                    field5: user.phone,
                    field6: user.address,
                };
            });

            return { data: userData, mapping: userMapping };
        };

        const mapBookData = (books) => {
            const bookMapping = {
                field0: "id",
                field1: "image",
                field2: "name",
                field3: "author",
                field4: "category",
                field5: "quantity",
                field6: "price",
                field7: "description",
            };

            const bookData = books?.map((book) => {
                return {
                    field0: book.id,
                    field1: book.image,
                    field2: book.name + " - " + book.author,
                    field3: book.category,
                    field4: book.quantity,
                    field5: book.price,
                    field6: book.description,
                };
            });

            return { data: bookData, mapping: bookMapping };
        };
        let mappedData;

        switch (content) {
            case "book":
                mappedData = mapBookData(books);
                break;
            case "user":
                mappedData = mapUserData(users);
                break;
            case "order":
                mappedData = mapOrderData(orders);
                break;
            default:
                mappedData = { data: [], mapping: {} };
        }

        setData(mappedData);
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
                {content == "book" && (
                    <ManageTitle
                        name={titleMap[content]}
                        button={buttonMap[content]}
                    />
                )}

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
