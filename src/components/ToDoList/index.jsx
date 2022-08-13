import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "store/authStore";

const ToDoList = () => {
    const { authToken } = useContext(AuthContext);

    return (
        <>
            {!authToken && <Navigate to="/auth" replace />}
            <div>ToDoList</div>
        </>
    );
};

export default ToDoList;
