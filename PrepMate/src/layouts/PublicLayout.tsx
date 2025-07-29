import { Outlet } from "react-router"

import Header from "../components/Header"
import AuthHanlder from "../handlers/authhandler"
import { Footer } from "../components/Footer"


const PublicLayout = () => {
  return (
    <div className="w-full ">
      <AuthHanlder />
      <Header/>
       <Outlet/>
      <Footer/>

      {/* Add your main content here */}
    </div>
  )
}

export default PublicLayout
