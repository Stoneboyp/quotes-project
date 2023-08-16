import { Routes, Route, Link } from "react-router-dom";
import AboutPage from "../AboutPage/AboutPage";
import QuotesPage from "../QuotesPage/QuotesPage";
import Home from "../Home/Home";

function Router() {
    return (
        <Routes>
            <Route path="/quotes" element={<QuotesPage />} />
            <Route path="/about" element={<AboutPage />} />
        </Routes>
    );
}

export default Router;
