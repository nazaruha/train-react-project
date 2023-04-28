import { Outlet } from "react-router-dom";
import DefaultHeader from "./defaultHeader";

const DefaultLayout = () => {
    return (
        <>
            <DefaultHeader />
            <div className="container">
                <Outlet /> {/* all dynamics are here */}
            </div>

        </>
    )
}

export default DefaultLayout;