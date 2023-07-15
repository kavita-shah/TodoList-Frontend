import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Header from './Header';
import { BrowserRouter, useNavigate, Route, Routes } from 'react-router-dom';
import Register from './Register';
import { useEffect, useState } from 'react';
import Login from './Login';
import List from './List';
import LogoutElem from './Logout';



function App() {
  let [user, setUser] = useState({})
  let navigate = useNavigate()
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('user'))


    if(user) {
      setUser(user)
      console.log(user)

      
    }
else{
  navigate('/register')
}
    

    
  }, [])



  function Logout() {
    alert('ok')
    localStorage.removeItem('user')
    navigate('/login')
  }
  return (
    <>
      <Header />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='register' element={<Register navigate={navigate} />} />
        <Route path='login' element={<Login navigate={navigate} name={user.name} setUser={setUser} />} />
        <Route path='list' element={<List />} />
        <Route path='logout' element={<LogoutElem Logout={Logout} />} />





      </Routes>





    </>
  );
}

export default App;
