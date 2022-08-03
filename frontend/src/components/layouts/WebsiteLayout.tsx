
import Header from "../Header";
import Footer from "../Footer";
import TopNav from "../TopNav";
import { Outlet } from "react-router-dom";




const WebsiteLayout = () => {
 


 

  return (
    <div>
      <header>
       <Header/>
        <hr />
        <TopNav/>

      
      </header>

      <main>
        <Outlet />
      </main>
      <Footer/>
     
    </div>
  );
};

export default WebsiteLayout;
