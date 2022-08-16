import React, { useContext, useState } from "react";
import * as todoApi from "@api/todoApi";
import AuthContext from "./authStore";

const TodoContext = React.createContext({
    todos: [],
    todoId: "",
    content: {},
    setTodos: () => {},
    setTodoId: () => {},
    setContent: () => {},
    createTodo: () => {},
    updateTodo: () => {},
});

export const TodoContextProvider = ({ children }) => {
    const { authToken } = useContext(AuthContext);
    const [todos, setTodos] = useState([]);
    const [todoId, setTodoId] = useState("");
    const [content, setContent] = useState("");

    const createTodoHandler = (todo) => {
        setTodos((prev) => {
            return [...prev, todo];
        });
    };

    const updateTodoHandler = (id, todoData) => {
        todoApi
            .updateTodo(authToken, id, todoData)
            .then((response) => {
                // console.log(response);
            })
            .catch((error) => {
                console.log(error.response);
            });
    };

    const deleteTodoHandler = (id) => {
        todoApi
            .deleteTodo(authToken, id)
            .then((response) => {
                // console.log(response);
            })
            .catch((error) => {
                console.log(error.response);
            });
    };

    const contextValue = {
        todos,
        todoId,
        content,
        setTodos,
        setTodoId,
        setContent,
        createTodo: createTodoHandler,
        updateTodo: updateTodoHandler,
        deleteTodo: deleteTodoHandler,
    };
    return (
        <TodoContext.Provider value={contextValue}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContext;
