import { ADD, UPDATE, DELETE, EDIT } from "../constants/constants"

export const addTask = (payload: any) => {
    return {
        type: ADD,
        payload
    }
}

export const updateTask = (payload: any) => {
    return {
        type: UPDATE,
        payload
    }
}

export const editTask = (payload: any) => {
    return {
        type: EDIT,
        payload
    }
}

export const deleteTask = (payload: any) => {
    return {
        type: DELETE,
        payload
    }
}


