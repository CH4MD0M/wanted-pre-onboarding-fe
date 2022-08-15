import React from "react";
import { Wrapper } from "./style";

const TodoItem = ({ id, todo, isCompleted }) => {
    return (
        <Wrapper>
            <input
                type="text"
                value={todo}
                onChange={(e) => e.preventDefault()}
            />
        </Wrapper>
    );
};

export default TodoItem;
