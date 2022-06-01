import { toast } from "react-toastify"


const taskReducer = (state = {}, action)=>{
    switch(action.type){
        case "ADD_TASK" :{
            toast.success("Added a task")
            return state
        }
        case "ADD_TASK_ERR" :{
            toast.error("An error occurred")
            return state
        }
        case "REMOVE_TASK" :{
            toast.warn("A task was removed")
            return state
        }
        case "REMOVE_TASK_ERR":{
            toast.error("An task remove error occurred...")
            return state
        }
        case "TOGGLE_CHECKED":{
            toast.info("An task Status changed...")
            return state
        }
        case "REMOVE_TASK_ERR":{
            toast.error("An task change error occurred...")
            return state
        }
        
        default: return state
    }

}

export default taskReducer;