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

const AdminPage = (props) => {
    //! Card: quantity, CRUD -> update Card
    //! ManageTitle: name, button
    //! ManageList: books (xem lại data - redux)

    // STT | Tên khách | Tên sách | Số lượng | Giá     | Phone | Address
    // STT | Hình      | Tên sách | Danh mục | Tồn kho | Giá   | Mô tả
    // STT | Username  | Name     | Role     | Email   | Phone | Address
    return (
        <div
            className="flex gap-[30px] justify-between h-screen
        max-h-screen overflow-hidden
        "
        >
            {/*//* Left  */}
            <AdminNav></AdminNav>

            {/*//* Right  */}
            <div className="flex flex-col gap-[20px] pt-[20px] pr-[20px]">
                {/*//* Cards  */}
                <div className="flex justify-between items-center ">
                    <Card name="Product" quantity={9} icon={faList}></Card>
                    <Card
                        name="Customer"
                        quantity={15}
                        icon={faCircleUser}
                    ></Card>
                    <Card
                        name="Order"
                        quantity={2}
                        icon={faHandHoldingDollar}
                    ></Card>
                    <Card
                        name="Category"
                        quantity={4}
                        icon={faCartShopping}
                    ></Card>
                </div>

                {/*//* Title  */}
                <ManageTitle
                    name="Quản lý khách hàng"
                    button="Add User"
                ></ManageTitle>

                {/*//* List  */}
                <ManageList books={props.books}></ManageList>
            </div>
        </div>
    );
};

AdminPage.propTypes = {
    books: PropTypes.array,
};
export default AdminPage;
