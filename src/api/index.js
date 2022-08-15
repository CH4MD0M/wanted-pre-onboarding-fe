import axios from "axios";

export const instance = axios.create({
    baseURL:
        "https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production",

    headers: { "Content-Type": "application/json" },
});

export const authInstance = (authToken) =>
    axios.create({
        baseURL:
            "https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production",
        headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
        },
    });
