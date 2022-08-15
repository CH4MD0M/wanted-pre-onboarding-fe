import React, { useContext, useEffect, useState } from "react";
import * as todoApi from "@api/todoApi";

// CSS
import { Wrapper } from "./style";
import TodoContext from "store/todoStore";
import TodoItem from "@components/TodoItem";

const TodoList = ({ authToken }) => {
    const { todos, setTodos } = useContext(TodoContext);

    // TodoList 불러오기
    const getTodoList = () => {
        todoApi
            .getTodos(authToken)
            .then((response) => {
                setTodos(response.data);
            })
            .catch((error) => {
                console.log(error.response);
            });
    };

    useEffect(() => {
        getTodoList();
    }, []);

    return (
        <Wrapper>
            {todos.map((item, index) => (
                <TodoItem
                    key={index}
                    todo={item.todo}
                    isCompleted={item.isCompleted}
                    id={item.id}
                />
            ))}
        </Wrapper>
    );
};

export default TodoList;
