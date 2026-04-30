import { FC, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';

import Sidebar, { SIDEBAR_FULL_W, SIDEBAR_MINI_W, SIDEBAR_BREAKPOINT } from '../Sidebar';

const AUTH_ROUTES = ['/login', '/forgot-password'];

const Layout: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(SIDEBAR_BREAKPOINT);

  const isAuthPage =
    AUTH_ROUTES.includes(location.pathname) || location.pathname.startsWith('/reset/');

  const showSidebar = !isAuthPage;
  const sidebarW = showSidebar ? (isMobile ? SIDEBAR_MINI_W : SIDEBAR_FULL_W) : 0;

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home');
    }
  }, []);

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {showSidebar && <Sidebar />}
      <main
        style={{
          flex: 1,
          marginLeft: sidebarW,
          minHeight: '100vh',
          transition: 'margin-left 0.25s ease',
          overflow: 'auto',
          background: 'var(--bg)',
        }}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
