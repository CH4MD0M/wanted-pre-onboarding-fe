import React, { useState } from "react";

const TodoContext = React.createContext({
    todos: [],
    setTodos: () => {},
    updateTodo: () => {},
});

export const TodoContextProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    const updateTodoHandler = (todo) => {
        setTodos((prev) => {
            return [...prev, todo];
        });
    };

    const contextValue = {
        todos,
        setTodos,
        updateTodo: updateTodoHandler,
    };
    return (
        <TodoContext.Provider value={contextValue}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContext;
