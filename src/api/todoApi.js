import { authInstance } from "./index";

export const getTodos = async (authToken) => {
    const data = await authInstance(authToken).get("/todos");
    return data;
};

export const createTodo = async (authToken, todo) => {
    const data = await authInstance(authToken).post("/todos", todo);
    return data;
};
