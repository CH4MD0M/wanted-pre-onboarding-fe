import styled from "styled-components";

export const Wrapper = styled.li`
    list-style: none;
    border: none;
    border-radius: 4px;
    padding: 1.2rem;
    margin: 0.5rem 0;
    background: #2d3647;
    transition: 0.2s linear;
    input {
        width: 100%;
        font-size: 16px;
        color: white;
        background: transparent;
        outline: none;
        border: none;
    }

    &:hover {
        background: #4a5568;
    }
`;
