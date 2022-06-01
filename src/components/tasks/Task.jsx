import React from "react"
import { connect, useDispatch } from "react-redux";
import { compose } from "redux";
import { firebaseConnect, firestoreConnect } from "react-redux-firebase"
import moment from "moment";
import Check from "./Check";
import './Task.css'
// icons
import { HiTrash } from "react-icons/hi";
// actions creator
import { removeTask, toggleChecked } from "../../actions/taskAction";


function Task(props) {
    const { tasks } = props
    console.log("Task -> tasks", tasks)

    const dispatch = useDispatch()

    function DeleteTask(task) { 
        dispatch(removeTask(task))
    }

    const handelCheck = task => {
        dispatch(toggleChecked(task))
    }

    return (
        <>
            <div className="min-h-full flex flex-col justify-center sm:px-6 lg:px-8">
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">

                    <div className="sm:flex sm:items-center">
                        <div className="sm:flex-auto">
                            <h1 className="text-xl font-semibold text-gray-900">Tasks</h1>
                            <p className="mt-2 text-sm text-gray-700">
                                A list of all the Task in your account.
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-col">
                        <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                {tasks && tasks.map((task) => {
                                    return (
                                        
                                            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg py-1">
                                                <div key={task.id} className="flex justify-between pr-3">
                                                    <span className="whitespace-nowrap py-4 pl-3 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                        {task.task}
                                                    </span>
                                                    <span className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{moment(task.date.toDate()).calendar()}</span>
                                                    <Check checked={task.checked} onClick={()=>handelCheck(task)} />
                                                    <span className="icons-task whitespace-nowrap px-3 py-4 text-sm text-gray-500" style={{cursor: "pointer"}} onClick={()=>DeleteTask(task)}><HiTrash /></span>
                                                </div>
                                            </div>
                                    
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}


const mapStateToProps = (state) => {
    console.log("mapStateToProps -----> state", state)
    const tasks = state.firestore.ordered.tasks;
    return {
        tasks: tasks,
        // uid: state.firebase.auth.uid,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        removeTask: task => dispatch(removeTask(task)),
        toggleChecked: (task)=>dispatch(toggleChecked(task))
    }
}

connect(null, mapDispatchToProps)

export default compose(
    connect(mapStateToProps),
    firestoreConnect((ownProps) => [
        {
            collection: "tasks",
            // where: ["autherId", "==", ownProps.uid],
            orderBy: ["date", "desc"],
        }
        
    ]))(Task);