import React, { useContext, useEffect, useState } from "react";
import * as todoApi from "@api/todoApi";
import CustomModal from "@components/Modal";

// CSS
import { Wrapper } from "./style";
import TodoContext from "store/todoStore";
import TodoItem from "@components/TodoItem";
import ModalContext from "store/modalStore";

const TodoList = ({ authToken }) => {
    const { todos, todoId, content, setTodos, deleteTodo } =
        useContext(TodoContext);
    const { modalOpen } = useContext(ModalContext);

    // TodoList 불러오기
    const getTodoList = () => {
        todoApi
            .getTodos(authToken)
            .then((response) => {
                setTodos(response.data);
            })
            .catch(() => {
                alert("로그인해주세요!");
            });
    };

    // TodoList 삭제하기
    const deleteTodoHandler = () => {
        deleteTodo(todoId);
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
