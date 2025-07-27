import { Outlet } from "react-router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { Container } from "../components/Container"


const MainLayoutPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header/>
       <Container className="flex-grow">
        <main className="flex-grow">
        <Outlet/>
        </main>
       </Container>
      <Footer/>
    </div>
  )
}

export default MainLayoutPage