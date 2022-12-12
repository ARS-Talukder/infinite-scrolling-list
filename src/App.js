import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Loading from './Components/Loading';
import Login from './Components/Login';
import RequireAuth from './Components/RequireAuth';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={
          <RequireAuth>
            <Home></Home>
          </RequireAuth>
        }></Route>
        {/* <Route path='/' element={<Home></Home>}></Route> */}
        <Route path='/home' element={
          <RequireAuth>
            <Home></Home>
          </RequireAuth>
        }></Route>
        {/* <Route path='/home' element={<Home></Home>}></Route> */}
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
