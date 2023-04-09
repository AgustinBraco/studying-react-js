import "../index.css";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function ErrorRoot() {
    const error = useRouteError();
    return <main>
        <p className="errorTitle">Unexpected error:</p>
        <p className="errorMessage">{error.statusText || error.message}</p>
        <Link to={"/"} className="errorLink">HOME</Link>
    </main>;
};

export default ErrorRoot;