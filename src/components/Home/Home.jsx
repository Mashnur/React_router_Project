import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "../Footer/Footer";


const Home = () => {
    const navigation =useNavigation();

    return (
        <div>
            <Header></Header>
            <h2 className="bg-orange-400 font-extrabold">This is the homePage</h2>
           {
            navigation.state=== "loading" ?
        <p>Loading...</p>:
            <Outlet></Outlet>
        
           
           }
           
            <Footer></Footer>
           
            
        </div>
    );
};

export default Home;