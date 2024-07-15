import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import FFooter from "../Shared/Footer";




const Main = () => {
    const navigation = useNavigation();
    return (
        <div className="">
            
           
     
      
            {
        navigation.state === "loading"?  <div className='flex justify-center items-center' >
        
        <span className="loading loading-ring loading-lg"></span>
        </div> :  <Outlet></Outlet> 
       }
          <div>
      <FFooter></FFooter>
          </div>
        </div>
        

    );
};

export default Main;