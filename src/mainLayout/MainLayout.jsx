
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const MainLayout = () => {
    return (
        <div>
            <div className='sticky top-0 z-50 backdrop-blur-2xl'>
            <Navbar></Navbar>
            </div>
            <div className='w-11/12 mx-auto'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;