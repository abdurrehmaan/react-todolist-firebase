import React, { useState } from 'react'
import { signIn } from '../../actions/authAction';
import { connect, useDispatch } from 'react-redux';
import { Navigate  } from 'react-router-dom'


function SignIn(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    function handelEmail(e) {
        setEmail(e.target.value)
    }
    function handelPassword(e) {
        setPassword(e.target.value)
    }
    function submitHandler(e) {
        e.preventDefault();
        const creds = { email: email, password: password }
        console.log("email and password", creds)
        dispatch(signIn(creds))
    }


        const { uid } = props;
        if (uid) return <Navigate  to="/" />

        return (
            <>

                <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md">
                        <div className="flex-shrink-0">
                            <span className='self-center text-xl font-semibold whitespace-nowrap text-white'>Todo List</span>
                        </div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign into Todolist</h2>

                    </div>

                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                            <form className="space-y-6" onSubmit={submitHandler}>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email address
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            value={email}
                                            required
                                            onChange={handelEmail}
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            value={password}
                                            onChange={handelPassword}
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Sign in
                                    </button>
                                </div>
                            </form>

                            <p>Create account if you dont have account</p>
                        </div>
                    </div>
                </div>
            </>
        )
   
}

const mapStateToProps = (state) => {
    const uid = state.firebase.auth.uid
    return {
        uid: uid
    }
}
const mapDispatchToProps = dispatch => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)