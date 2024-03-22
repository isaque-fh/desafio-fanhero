import { Routes, Route, Navigate } from 'react-router-dom'
import Users from '../presentation/pages/users/Users';
import RegisterUser from '../presentation/pages/register-user/registerUser';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={ <Navigate to="/users" /> }/>
      <Route path="/users" element={<Users />}/>
      <Route path="/create-user" element={<RegisterUser/>}/>
    </Routes>
  );
};