import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import './Layout.css';

/* */

const Layout = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <main className="content-area">
          <Outlet /> {}
        </main>
      </div>
    </div>
  );
};

export default Layout;