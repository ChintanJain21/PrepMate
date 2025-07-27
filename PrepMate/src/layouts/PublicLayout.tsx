import { Outlet } from "react-router"
import Footer from "../components/Footer"
import Header from "../components/Header"


const PublicLayout = () => {
  return (
    <div className="w-full ">
      <Header/>
       <Outlet/>
      <Footer/>

      {/* Add your main content here */}
    </div>
  )
}

export default PublicLayout
