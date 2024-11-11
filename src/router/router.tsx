import { Navigate, Route, Routes } from 'react-router-dom';

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
      <Route path='/' element={<Navigate to='/thin' replace />} />
      <Route path='/thin' element={<Login />} />
      <Route path='/thin/register' element={<Register />} />
      <Route path='/thin/register/verify' element={<Verify />} />

      <Route path='/thin/home' element={<Home />} />

      <Route path='/thin/search' element={<Search />} />
      <Route path='/thin/search/result' element={<Result />} />

      <Route path='/thin/message' element={<Message />} />
      <Route path='/thin/message/:id' element={<MessageDetail />} />

      <Route path='/thin/detail/:type/:id' element={<DetailProfile />} />

      <Route path='/thin/my' element={<MyPage />} />
      <Route path='/thin/my/modify' element={<Modify />} />

      <Route path='/thin/my/service' element={<ServiceHistory />} />
      <Route path='/thin/my/service/:id' element={<DetailServiceHistory />} />
      <Route path='/thin/my/certificate' element={<Certificate />} />
      <Route path='/thin/my/certificate/new' element={<NewCertificate />} />
      <Route path='/thin/my/certificate/:id' element={<EidtCertificate />} />
    </Routes>
  );
}

export default Router;
