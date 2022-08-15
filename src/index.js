import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "store/authStore";
import { TodoContextProvider } from "store/todoStore";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <AuthContextProvider>
            <TodoContextProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </TodoContextProvider>
        </AuthContextProvider>
    </React.StrictMode>
);
