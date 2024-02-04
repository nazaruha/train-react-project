import { FC, CSSProperties } from "react";
import { Link } from "react-router-dom";

const DefaultNotFound: FC = () => {
    return (
        <div style={myStyle}>
            <h1>Page not found</h1>
            <Link to="/" className="nav-link">Get back Home</Link>
        </div>
    )
}

const myStyle: CSSProperties = {
    position: 'absolute',
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
}

export default DefaultNotFound;