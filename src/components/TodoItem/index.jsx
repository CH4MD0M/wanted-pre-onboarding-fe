import React, { useContext, useState } from "react";
import ModalContext from "store/modalStore";
import TodoContext from "store/todoStore";

// CSS
import { Wrapper } from "./style";
import { BsFillCheckCircleFill, BsFillTrashFill } from "react-icons/bs";
import { MdModeEditOutline } from "react-icons/md";

const TodoItem = ({ id, todo, isCompleted }) => {
    const { setModalOpen, setUpdateMode } = useContext(ModalContext);
    const { setTodoId, setContent, updateTodo } = useContext(TodoContext);
    const [complete, setComplete] = useState(isCompleted);

    const handleUpdate = () => {
        setModalOpen(true);
        setUpdateMode(true);
        setContent({ id, todo, isCompleted });
    };

    const handleDelete = () => {
        setModalOpen(true);
        setTodoId(id);
    };

    const completeTodoHandler = () => {
        updateTodo(id, { todo, isCompleted: !isCompleted });
        setComplete(!complete);
    };

    return (
        <>
            <Wrapper isCompleted={complete}>
                <div className="todo">{todo}</div>
                <div className="task">
                    <button
                        className="onComplete"
                        onClick={completeTodoHandler}
                    >
                        <BsFillCheckCircleFill />
                    </button>
                    <button className="onModify" onClick={handleUpdate}>
                        <MdModeEditOutline />
                    </button>
                    <button className="onDelete" onClick={handleDelete}>
                        <BsFillTrashFill />
                    </button>
                </div>
            </Wrapper>
        </>
    );
};

export default TodoItem;
