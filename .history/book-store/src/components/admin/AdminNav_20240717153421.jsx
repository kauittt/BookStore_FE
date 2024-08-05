import PropTypes from "prop-types";
const AdminNav = () => {
    return (
        <div className="flex flex-col gap-[50px] font-semibold text-lg">
            <p className="">Dashboard</p>
            <p className="">Manage Books</p>
            <p className="">Manage Customer</p>
            <p className="">Manage Order</p>
        </div>
    );
};

AdminNav.propTypes = {
    book: PropTypes.object,
};
export default AdminNav;
