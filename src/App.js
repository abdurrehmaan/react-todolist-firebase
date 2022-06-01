import './App.css';
// libraries
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
// components
import SignIn from '../src/components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Dashboard from './components/dashboard/Dashboard'
import Navbar from './components/layout/Navbar';



function App() {
  return (
    <>
      
      <Router>
        <ToastContainer />
        <Navbar />
        <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            {/* <Route path="/sign" element={<SignUp />} /> */}
        </Routes>
      </Router>

    </>
  );
}

export default App;
