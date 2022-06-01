import {combineReducers} from 'redux'
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

// All Reducers
import authReducer  from './authReducer'
import taskReducer from './taskReducer';

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    task: taskReducer,
    auth: authReducer

})

export default rootReducer