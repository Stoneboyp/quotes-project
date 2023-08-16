import { useContext, useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Router from "./components/Route/Router";
import { QuotesContext } from "./components/context";
import { useLocation } from "react-router-dom";

function App() {
    const { setStopLoading } = useContext(QuotesContext);
    const location = useLocation();

    if (location.pathname != "/quotes") {
        setStopLoading(true);
        console.log("hi");
    } else setStopLoading(false);
    return (
        <>
            <Home />
            <Router />
        </>
    );
}

export default App;
