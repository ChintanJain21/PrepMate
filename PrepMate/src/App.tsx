
import {  Routes, Route } from 'react-router'
import PublicLayout from './layouts/PublicLayout'
import HomePage from './Routes/Home'
import AuthLayout from './layouts/AuthLayout'
import SignInPage from './Routes/SignIn'
import SignUpPage from './Routes/SignUp'
import ProtectRoutes from './layouts/ProtectedRoutes'
import MainLayoutPage from './layouts/MainLayout'
import { Generate } from './components/Generate'
import Dashboard from './Routes/Dashboard'
import { CreateEditPage } from './Routes/CreateEditPage'

const App = () => {
  return (
  
      <Routes>
       
      <Route element={<PublicLayout />}> 
      <Route index element={<HomePage/>} />
      </Route>

        
      <Route element={<AuthLayout/>}> 
      <Route path='/signin/*' element={<SignInPage/>} />
      <Route path='/signup/*' element={<SignUpPage/>} />
      </Route>

      <Route element={<ProtectRoutes>
        <MainLayoutPage/>
      </ProtectRoutes>}>
      <Route element={<Generate/>}path='/generate'>
       <Route index element={<Dashboard/>} />
       <Route path=":interviewId" element={<CreateEditPage />} />
      </Route>

      </Route>
     
      </Routes>
    
  )
}

export default App
