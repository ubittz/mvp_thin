import { Route, Routes } from 'react-router-dom';

import Home from '@@pages/Home';
import Login from '@@pages/Login';
import Register from '@@pages/Register';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Register />} />
      <Route path='/register' element={<Login />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  );
}

export default Router;
