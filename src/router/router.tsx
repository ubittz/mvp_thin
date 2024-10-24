import { Route, Routes } from 'react-router-dom';

import DetailProfile from '@@pages/DetailProfile';
import Home from '@@pages/Home';
import Login from '@@pages/Login';
import Message from '@@pages/Message';
import MessageDetail from '@@pages/Message/Detail';
import MyPage from '@@pages/MyPage';
import Modify from '@@pages/MyPage/Modify';
import Register from '@@pages/Register';
import Verify from '@@pages/Register/Verify';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/register/verify' element={<Verify />} />
      <Route path='/home' element={<Home />} />
      <Route path='/message' element={<Message />} />
      <Route path='/message/:id' element={<MessageDetail />} />
      <Route path='/detail/:type/:id' element={<DetailProfile />} />
      <Route path='/my' element={<MyPage />} />
      <Route path='/my/modify' element={<Modify />} />
    </Routes>
  );
}

export default Router;
