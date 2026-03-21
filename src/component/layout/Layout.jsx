
import{ Outlet} from "react-router-dom"
import Header from "./Header"         
import Footer from "./Footer"  
const Layout = ()=>{
    return(
        <>
        <Header/>
        <main className="mx-2 lg:mx-10">
            <Outlet/>
        </main>
        <Footer/>
        
        </>
    )
}
export default Layout