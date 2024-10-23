import { Route, Routes } from 'react-router-dom';

import DetailProfile from '@@pages/DetailProfile';
import Home from '@@pages/Home';
import Login from '@@pages/Login';
import Register from '@@pages/Register';
import Verify from '@@pages/Register/Verify';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/register/verify' element={<Verify />} />
      <Route path='/home' element={<Home />} />
      <Route path='/detail/:type/:id' element={<DetailProfile />} />
    </Routes>
  );
}

export default Router;
