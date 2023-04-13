import { Link } from "react-router-dom";

const DefaultHeader: React.FC = () => {
    return (
        <>
            <header data-bs-theme='dark'>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top bg-body-tertiary">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <Link className="navbar-brand" to="/">Navbar</Link>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <Link to="my-counter" className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">MyCounter</a>
                                </Link>
                                <Link to="tutorial-counter" className="nav-item">
                                    <a className="nav-link text-warning" href="#">TutorialCounter</a>
                                </Link>
                                <Link to="text-field" className="nav-item">
                                    <a className="nav-link disabled  text-danger">TextField</a>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default DefaultHeader;