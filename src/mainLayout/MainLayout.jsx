
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const MainLayout = () => {
    return (
        <div>
            <div className='sticky top-0 z-50 backdrop-blur-2xl border-b border-b-green-400'>
            <Navbar></Navbar>
            </div>
            <div className='min-h-[calc(100vh-430px)] '>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;