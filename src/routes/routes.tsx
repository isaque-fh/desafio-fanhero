import { Routes, Route } from 'react-router-dom'
import Users from '../presentation/pages/users/Users';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/users" element={<Users />}/>
    </Routes>
  );
};