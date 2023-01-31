import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "../App";
import HeadBanner from "../components/ui/headbanner/headbanner";
import RequestProduct from "../pages/requestproduct";

const PageRoutes = () => {
    return (
        <BrowserRouter>
            <header>
                <HeadBanner className="py-3" type={"common"}>
                    <></>
                </HeadBanner>
                <div className="bg-white py-5 shadow"></div>
            </header>
            <Routes>
                <Route path={"/request-product"} element={<RequestProduct/>}></Route>
                <Route path={"/"} element={<App/>}></Route>
            </Routes>
            <footer>
                <HeadBanner className="py-5" type={"common"}>
                    <></>
                </HeadBanner>
            </footer>
        </BrowserRouter>
    );
}

export default PageRoutes