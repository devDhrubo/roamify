import { Outlet } from "react-router-dom";
import Header from "../assets/components/Header/Header";
import Footer from "../assets/components/Footer/Footer";

const Root = () => {
    return (
        <div className="dark:bg-gray-800">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;