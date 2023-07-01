import {configureStore} from "@reduxjs/toolkit";
import PostsReducer from "./reducers/post";
import UsersReducer from "./reducers/users";

export const store = configureStore({
    reducer: {
        posts: PostsReducer,
        users: UsersReducer,
    },
});
