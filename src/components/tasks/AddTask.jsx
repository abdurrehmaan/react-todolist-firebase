import React, { useState } from 'react'
import {connect, useDispatch} from 'react-redux'
// actions creator
import { addTask } from '../../actions/taskAction';

 function AddTask() {
    const[task, setTask] = useState('');
    const[checked, setChecked] = useState(false);
    const dispatch = useDispatch()

    function handelTask(e){
        setTask(e.target.value)
    }

    function submitHandler(e){
        e.preventDefault();
        const userTasks = {task: task};
        dispatch( addTask(userTasks))
        setTask('')
    }
    return (
        <>

            <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6" onSubmit={submitHandler}>
                            <div>
                                <label htmlFor="task" className="block text-sm font-medium text-gray-700">
                                    Add Task
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="task"
                                        name="task"
                                        type="task"
                                        autoComplete="task"
                                        value={task}
                                        required
                                        onChange={handelTask}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit" 
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Add Task
                                </button>
                            </div>
                        </form>



                    </div>
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addTask: task => dispatch(addTask(task))
    };
};

export default connect(null, mapDispatchToProps)(AddTask);
