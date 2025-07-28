import { Outlet } from "react-router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import AuthHanlder from "../handlers/authhandler"


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
