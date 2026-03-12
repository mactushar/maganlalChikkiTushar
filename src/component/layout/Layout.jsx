
import{ Outlet} from "react-router-dom"
import Header from "./Header"         
import Footer from "./Footer"  
const Layout = ()=>{
    return(
        <>
        <Header/>
        <main className="mx-2 lg:mx-30">
            <Outlet/>
        </main>
        <Footer/>
        
        </>
    )
}
export default Layout