import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QuotesContextProvider } from "./components/context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <QuotesContextProvider>
                <App />
            </QuotesContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);
