import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';
// import Sidebar from './Sidebar';
// import Navbar from './Navbar';
// import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#0f0f1b] text-white">
      <Sidebar />
      
      {/* We add ml-64 to push the content to the right of the sidebar */}
      <div className="ml-64 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-1 px-10 py-8">
          <Outlet /> {/* This renders Home, Login, etc. */}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;