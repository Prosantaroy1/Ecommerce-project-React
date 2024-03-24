import { Outlet } from "react-router-dom";
import Navber from "../shared/Navber/Navber";

const Main = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
            <h2>Footer Section</h2>
        </div>
    );
};

export default Main;