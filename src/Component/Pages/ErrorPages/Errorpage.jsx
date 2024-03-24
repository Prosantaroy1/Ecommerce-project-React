import { Link, useRouteError } from "react-router-dom";


const Errorpage = () => {
    const error = useRouteError();

    return (
        <div className="flex justify-center items-center flex-col gap-3 pt-52">
          <h1 className="text-3xl font-bold">Oops!!</h1>
          <p className="text-xl">Sorry, an unexpected error has occurred.</p>
          <p>
             <i>{error.statusText || error.message}</i>
           </p>
           <Link to='/'>Go Back Home</Link>
        </div>
    );
};

export default Errorpage;