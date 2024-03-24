import { Link } from "react-router-dom";


const Navber = () => {
    return (
        <div className="flex gap-16">
            <Link to='/'>Home</Link>
            <Link to='/shop'>Shop</Link>
            <Link to='/card'>Card</Link>
        </div>
    );
};

export default Navber;