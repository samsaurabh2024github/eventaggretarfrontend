import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#0f0f1b] text-white flex flex-col">
      <Navbar /> 
      
      {/* Full-width layout without sidebar */}
      <main className="flex-1 w-full">
        <Outlet /> {/* This renders Home, Login, etc. */}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;