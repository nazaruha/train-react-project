import { FC } from "react";
import { Link } from "react-router-dom";

const DefaultNotFound: FC = () => {
    return (
        <>
            <h1>Page not found</h1>
            <Link to="/" className="nav-link">Get back Home</Link>
        </>
    )
}

export default DefaultNotFound;