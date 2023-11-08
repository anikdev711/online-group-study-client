import { Link } from "react-router-dom";
import notFound from "../../assets/images/notfound.png"

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen" >
            <h1 className="text-5xl font-poppins">404</h1>
            <div>
                <img src={notFound} alt="" />
            </div>
            <h3 className="text-2xl font-poppins mt-5 mb-5">Page not found</h3>
            <h3 className="text-2xl font-poppins mt-5 mb-5">May be Loading problem. Please Go back to home and come again, donot reload</h3>

            <Link to="/">
                <button className="btn btn-warning font-bold">Go Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;