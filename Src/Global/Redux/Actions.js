import { LOGIN } from "./Constants";

export const login=data=>({
    type:LOGIN,
    payload:{
        email:data.email
    }
})