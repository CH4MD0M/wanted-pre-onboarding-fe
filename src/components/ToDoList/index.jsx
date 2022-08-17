import React, { useContext, useEffect, useState } from "react";
import * as todoApi from "@api/todoApi";
import CustomModal from "@components/Modal";
import TodoContext from "store/todoStore";
import TodoItem from "@components/TodoItem";
import ModalContext from "store/modalStore";
import AuthContext from "store/authStore";

// CSS
import { Wrapper } from "./style";

const TodoList = () => {
    const { authToken } = useContext(AuthContext);
    const { todos, todoId, content, setTodos, deleteTodo } =
        useContext(TodoContext);
    const { modalOpen, setModalOpen } = useContext(ModalContext);

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

    // TodoList 삭제하기
    const deleteTodoHandler = () => {
        deleteTodo(todoId);
        getTodoList();
    };

    useEffect(() => {
        getTodoList();
    }, [modalOpen]);

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
            {modalOpen && (
                <CustomModal content={content} deleteTodo={deleteTodoHandler} />
            )}
        </Wrapper>
    );
};

export default TodoList;
