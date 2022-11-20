import { ADD } from "../constants/constants"

const initilaState:any = []

const addTaskreducer = (state = initilaState, action: any) => {

    const { type, payload } = action;
    switch (type) {
        case ADD:
            return {
                ...state,
            }


        default: return state
    }

}
export default addTaskreducer