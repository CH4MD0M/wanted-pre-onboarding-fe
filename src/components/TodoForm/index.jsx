import React, { useContext } from "react";
import AuthContext from "store/authStore";

import * as todoApi from "@api/todoApi";
import useInput from "@hooks/useInput";

// CSS

import { Wrapper, Form } from "./style";
import { Label, Error } from "@components/AuthForm/style";
import { Button } from "@components/UI/Button";
import TodoContext from "store/todoStore";

const TodoForm = () => {
    const { authToken } = useContext(AuthContext);
    const { updateTodo } = useContext(TodoContext);

    const {
        value: todo,
        isValid: todoIsValid,
        hasError: todoHasError,
        valueChangeHandler: onChangeTodo,
        inputBlurHandler: onBlurTodo,
    } = useInput((value) => value.length !== 0);

    // Form Validation
    let formIsValid = false;
    if (todoIsValid) {
        formIsValid = true;
    }

    // TodoList 추가
    const createTodo = () => {
        todoApi
            .createTodo(authToken, { todo })
            .then((response) => {
                // console.log(response.data);
                updateTodo(response.data);
            })
            .catch((error) => {
                console.log(error.response);
            });
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();
        createTodo();
    };

    return (
        <Wrapper>
            <Form onSubmit={formSubmitHandler}>
                <Label error={todoHasError}>
                    <div>
                        <input
                            type="text"
                            id="todo"
                            name="todo"
                            value={todo}
                            onChange={onChangeTodo}
                            onBlur={onBlurTodo}
                        />
                    </div>
                    {todoHasError && <Error>내용을 입력해주세요</Error>}
                </Label>
                <Button type="submit" disabled={!formIsValid}>
                    추가
                </Button>
            </Form>
        </Wrapper>
    );
};

export default TodoForm;
