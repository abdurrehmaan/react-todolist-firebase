import React from 'react'
import { connect } from 'react-redux'
// action creator
import { signOut } from '../../actions/authAction'
// react-router-dom
import { Link } from 'react-router-dom'

const Navitems = (props) => {
  const { signOut, uid } = props
  if (uid) {
    return (
      <Link to="/signin" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={signOut}>Signout</Link>
    )
  }
  else {
    return (
      <div>

        <Link to="/signin" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign In</Link>
        <Link to="/signup" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign Up</Link>

      </div>
    )
  }

}

const mapStateToProps = state => {
  const uid = state.firebase.auth.uid
  console.log("signed out")
  return {
    uid: uid
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navitems);