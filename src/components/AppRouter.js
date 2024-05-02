import {Routes, Route, Navigate} from 'react-router-dom'
import Chat from './Chat';
import Login from './Login';
import { useContext } from 'react';
import {useAuthState} from 'react-firebase-hooks/auth'
import {Context} from '..'

function AppRouter() {
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)

  return user ? 
  (
    <Routes>
      <Route key={'/chat'} path={'/chat'} element={<Chat />}  />
      <Route path="*" element={<Navigate to={"/chat"} replace />} />
    </Routes>
  ) 
  : 
  (
    <Routes>
      <Route key={'/login'} path={'/login'} element={<Login />}  />
      <Route path="*" element={<Navigate to={"/login"} replace />} />
    </Routes>
  ) 
  
}

export default AppRouter;
