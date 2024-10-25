import { Route, Routes } from 'react-router-dom';

import Certificate from '@@pages/Certificate';
import EidtCertificate from '@@pages/Certificate/Edit';
import NewCertificate from '@@pages/Certificate/New';
import DetailProfile from '@@pages/DetailProfile';
import Home from '@@pages/Home';
import Login from '@@pages/Login';
import Message from '@@pages/Message';
import MessageDetail from '@@pages/Message/Detail';
import MyPage from '@@pages/MyPage';
import Modify from '@@pages/MyPage/Modify';
import Register from '@@pages/Register';
import Verify from '@@pages/Register/Verify';
import Search from '@@pages/Search';
import Result from '@@pages/Search/Result';
import ServiceHistory from '@@pages/ServiceHistory';
import DetailServiceHistory from '@@pages/ServiceHistory/Detail';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/register/verify' element={<Verify />} />
      <Route path='/home' element={<Home />} />
      <Route path='/search' element={<Search />} />
      <Route path='/search/result' element={<Result />} />
      <Route path='/message' element={<Message />} />
      <Route path='/message/:id' element={<MessageDetail />} />
      <Route path='/detail/:type/:id' element={<DetailProfile />} />
      <Route path='/my' element={<MyPage />} />
      <Route path='/my/modify' element={<Modify />} />
      <Route path='/my/service' element={<ServiceHistory />} />
      <Route path='/my/service/:id' element={<DetailServiceHistory />} />
      <Route path='/my/certificate' element={<Certificate />} />
      <Route path='/my/certificate/new' element={<NewCertificate />} />
      <Route path='/my/certificate/:id' element={<EidtCertificate />} />
    </Routes>
  );
}

export default Router;
