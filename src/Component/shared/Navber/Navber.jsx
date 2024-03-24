import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Navber = () => {
    return (
        <div className="flex justify-between  items-center px-4 py-3 text-white bg-slate-600">
            {/**navber banner */}
             <div>
                 <p>
                    <IoMenu className="text-4xl"/>
                 </p>
             </div>
             {/**navber link  */}
              <div className="flex gap-8 items-center">
                <Link to='/ ' className="text-xl font-bold">Home</Link>
                <Link to='/shop' className="text-xl font-bold">Shop</Link>
             </div>
             <div className="flex gap-6 items-center ">
                {/**add card product */}
               <Link to='/card' className="text-xl pt-2">
                <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                     <span className="badge badge-sm indicator-item">8</span>
                </div>
                </Link>
                <input type="text" placeholder="Search product.." className="rounded ps-4 border border-solid w-12 md:w-auto py-2" />
                 {/**login link */}
                 <Link to='/login'>
                   <button  className="rounded bg-indigo-700 text-white px-4 py-2">Login</button>
                 </Link>
             </div>
        </div>
    );
};

export default Navber;