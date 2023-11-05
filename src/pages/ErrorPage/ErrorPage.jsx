import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h1 className="text-5xl font-poppins">404 not found</h1>
            <Link>
                <button>Go Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;