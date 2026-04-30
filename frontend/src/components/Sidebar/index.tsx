import { FC, ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import { useAuthStore } from '@/stores';
import { usePermissions } from '@/hooks';
import { SUBJECTS } from '@/context/casl';
import styles from './Sidebar.module.scss';
import {
  HomeOutlined,
  CookieOutlined,
  FormatListBulletedOutlined,
  StarBorderOutlined,
  LeaderboardOutlined,
  AutoGraphOutlined,
  SettingsOutlined,
  Person2Outlined,
  LogoutOutlined,
} from '@mui/icons-material';

export const SIDEBAR_FULL_W = 220;

type NavItemDef = {
  id: string;
  path: string;
  label: string;
  icon: ReactNode;
};

const Sidebar: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout, isLoggedIn } = useAuthStore();
  const { hasAccess } = usePermissions();

  const isAdmin = hasAccess(SUBJECTS.PERMISSION_EDIT);
  const isShowPoll = process.env.VITE_FEATURE_POLL === 'true';
  const isShowResults =
    hasAccess(SUBJECTS.SHOW_RESULTS) || process.env.VITE_FEATURE_RESULTS === 'true';

  const navItems: NavItemDef[] = [
    { id: 'home', path: '/home', label: 'Головна', icon: <HomeOutlined /> },
    ...(isLoggedIn
      ? [
          { id: 'cookie', path: '/cookie', label: 'Крихти', icon: <CookieOutlined /> },
          {
            id: 'cookie-list',
            path: '/cookie/list',
            label: 'Список',
            icon: <FormatListBulletedOutlined />,
          },
          {
            id: 'cookie-rating',
            path: '/cookie/rating',
            label: 'Рейтинг',
            icon: <StarBorderOutlined />,
          },
        ]
      : []),
    ...(isShowPoll
      ? [{ id: 'vote', path: '/vote', label: 'Голосування', icon: <LeaderboardOutlined /> }]
      : []),
    ...(isShowResults
      ? [{ id: 'result', path: '/result', label: 'Результати', icon: <AutoGraphOutlined /> }]
      : []),
    ...(isAdmin
      ? [{ id: 'settings', path: '/settings', label: 'Налаштування', icon: <SettingsOutlined /> }]
      : []),
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navBtnClass = (path: string) =>
    [styles.navBtn, isActive(path) && styles.navBtnActive].filter(Boolean).join(' ');

  return (
    <aside className={`${styles.sidebar}`}>
      <div className={styles.logoRow}>
        <div className={styles.logoAvatar}>
          <img src="/logo.jpg" className={styles.logoImg} alt="Inari" />
        </div>
      </div>

      <nav className={styles.nav}>
        {navItems.map((item) => (
          <Button
            key={item.id}
            onClick={() => navigate(item.path)}
            className={navBtnClass(item.path)}
            startIcon={item.icon}
            fullWidth
          >
            {item.label}
          </Button>
        ))}
      </nav>

      <div className={styles.bottomSection}>
        <Button
          onClick={() => navigate('/profile')}
          className={navBtnClass('/profile')}
          startIcon={<Person2Outlined />}
          fullWidth
        >
          Профіль
        </Button>
        <Button
          onClick={handleLogout}
          className={`${styles.navBtn} ${styles.logoutBtn}`}
          startIcon={<LogoutOutlined />}
          fullWidth
        >
          Вийти
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
