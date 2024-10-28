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
      <Route path='/my-pwa/' element={<Login />} />
      <Route path='/my-pwa/register' element={<Register />} />
      <Route path='/my-pwa/register/verify' element={<Verify />} />
      <Route path='/my-pwa/home' element={<Home />} />
      <Route path='/my-pwa/search' element={<Search />} />
      <Route path='/my-pwa/search/result' element={<Result />} />
      <Route path='/my-pwa/message' element={<Message />} />
      <Route path='/my-pwa/message/:id' element={<MessageDetail />} />
      <Route path='/my-pwa/detail/:type/:id' element={<DetailProfile />} />
      <Route path='/my-pwa/my' element={<MyPage />} />
      <Route path='/my-pwa/my/modify' element={<Modify />} />
      <Route path='/my-pwa/my/service' element={<ServiceHistory />} />
      <Route path='/my-pwa/my/service/:id' element={<DetailServiceHistory />} />
      <Route path='/my-pwa/my/certificate' element={<Certificate />} />
      <Route path='/my-pwa/my/certificate/new' element={<NewCertificate />} />
      <Route path='/my-pwa/my/certificate/:id' element={<EidtCertificate />} />
    </Routes>
  );
}

export default Router;
