import { FC } from "react";
import { NavLink, useMatch } from "react-router-dom";
import classNames from 'classnames';

const DefaultHeader: FC = () => {
    const classArr: {} = ['nav-link'];
    const classArr1: {} = [{ 'nav-link': true }];
    // const textColor = new Map<"success" | "danger" | "warning" | "secondary", string>();
    // textColor.set("success", "success");
    // textColor.set("danger", "danger");
    // textColor.set("warning", "warning");
    // textColor.set("secondary", "secondary");
    const textColor: Record<"success" | "danger" | "warning" | "secondary", string> = {
        success: "success",
        danger: "danger",
        warning: "warning",
        secondary: "secondary"
    };

    return (
        <>
            <header data-bs-theme='dark' style={{ marginBottom: "100px" }}>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top bg-body-tertiary">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <NavLink
                            to="/"
                            className={classNames(
                                'navbar-brand',
                                { ['text-light']: useMatch("/") }
                            )}>
                            Navbar
                        </NavLink>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink
                                        to="my-counter"
                                        className={classNames(
                                            classArr,
                                            { [`text-${textColor["success"]}`]: true },
                                            { ['text-light']: useMatch("my-counter") },

                                        )}> {/* text-success */}
                                        MyCounter
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="tutorial-counter"
                                        className={classNames(
                                            classArr1,
                                            { [`text-${textColor["warning"]}`]: true },
                                            { ['text-light']: useMatch("tutorial-counter") }
                                        )}> {/* text-warning */}
                                        TutorialCounter
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="text-field"
                                        className={classNames(
                                            { 'nav-link': true },
                                            { [`text-${textColor["danger"]}`]: true },
                                            { ['text-light']: useMatch("text-field") }
                                        )}> {/* text-danger */}
                                        TextField
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="tutorial-useRef"
                                        className={classNames(
                                            'nav-link',
                                            { [`text-${textColor["secondary"]}`]: true },
                                            { ['text-light']: useMatch("tutorial-useRef") }
                                        )}> {/* text-secondary */}
                                        TutorialUseRef
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="tutorial-useEffect"
                                        className={classNames(
                                            'nav-link',
                                            { [`text-${textColor["success"]}`]: true },
                                            { ['text-light']: useMatch("tutorial-useEffect") }
                                        )}> {/* text-secondary */}
                                        TutorialUseEffect
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header >
        </>
    )
}

export default DefaultHeader;