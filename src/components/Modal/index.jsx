import React, { useContext, useState } from "react";
import ModalContext from "store/modalStore";

import { Modal } from "@mui/material";
import { Box } from "./style";
import TodoContext from "store/todoStore";

const CustomModal = ({ content, deleteTodo }) => {
    const { modalOpen, setModalOpen, updateMode, setUpdateMode } =
        useContext(ModalContext);
    const { updateTodo } = useContext(TodoContext);
    const [newTodo, setNewTodo] = useState(content.todo);

    const onChangeHandler = (e) => {
        setNewTodo(e.target.value);
    };

    const onClose = () => {
        setModalOpen(false);
        setUpdateMode(false);
    };

    const onDelete = () => {
        deleteTodo();
        onClose();
    };

    const modifyTodoHandler = () => {
        updateTodo(content.id, {
            todo: newTodo,
            isCompleted: content.isCompleted,
        });
        onClose();
    };

    return (
        <Modal
            open={modalOpen}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box>
                <div className="modal-container">
                    {updateMode ? (
                        <div className="modify-container">
                            <p>Todo 수정</p>
                            <input value={newTodo} onChange={onChangeHandler} />
                        </div>
                    ) : (
                        <p>삭제하시겠습니까?</p>
                    )}

                    <div className="btn-container">
                        <button onClick={onClose}>취소</button>
                        <button
                            onClick={updateMode ? modifyTodoHandler : onDelete}
                        >
                            확인
                        </button>
                    </div>
                </div>
            </Box>
        </Modal>
    );
};

export default CustomModal;
