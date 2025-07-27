import { Outlet } from "react-router"



const AuthLayout = () => {
  return (
    <div className="w-screen h-screen overlow-hidden flex justify-center items-center relative">
      
       <Outlet/>
    
    </div>
  )
}

export default AuthLayout
