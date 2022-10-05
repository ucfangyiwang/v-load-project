import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import Home from './pages/Home';
import Tracking from './pages/Tracking';
import ForgetPassword from './pages/ForgetPassword';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Header from './component/Header';

function App() {
  return(
    <>
    
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tracking' element={<Tracking/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/forgetpassword' element={<ForgetPassword/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      
    </Router>
    </>
  )
}

export default App;
