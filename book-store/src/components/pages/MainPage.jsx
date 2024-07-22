import { Outlet } from "react-router-dom";
import Nav from "../navbar/Nav";

const MainPage = () => {
    return (
        <>
            <Nav />
            <Outlet />
        </>
    );
};
export default MainPage;
