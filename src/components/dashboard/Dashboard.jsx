import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
// Components
import AddTask from '../tasks/AddTask'
import Task from '../tasks/Task'

function Dashboard({uid}) {
  if(!uid) return <Navigate to='/signin' />
  return (
    <div>
        <AddTask />
        <Task />

        
    </div>
  )
}

const mapStateToProps = state => {
  const uid = state.firebase.auth.uid
  return {
    uid: uid
  }
}

export default connect(mapStateToProps)(Dashboard)