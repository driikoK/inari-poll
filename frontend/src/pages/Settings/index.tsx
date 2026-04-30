import { FC, useEffect } from 'react';
import toast from 'react-hot-toast';

import { GridColDef } from '@mui/x-data-grid';
import { Box, MenuItem, Select, SelectChangeEvent } from '@mui/material';

import { CustomTable } from '@/components';
import useAuthStore, { User } from '@/stores/useAuthStore';
import { userRoleOptions } from '@/utils/constants';
import { ROLE } from '@/context/casl';
import styles from './Settings.module.scss';

const ROLE_COLOR: Record<string, string> = {
  [ROLE.ADMIN]: 'var(--accent)',
  [ROLE.DIRECTOR]: 'var(--teal)',
  [ROLE.MEMBER]: 'var(--text-muted)',
};

type RoleCellProps = {
  userId: string;
  currentRole: string;
  isSelf: boolean;
  onUpdate: (id: string, role: ROLE) => Promise<void>;
  onRefresh: () => void;
};

const RoleCell: FC<RoleCellProps> = ({ userId, currentRole, isSelf, onUpdate, onRefresh }) => {
  const roleLabel = userRoleOptions.find((r) => r.value === currentRole)?.label ?? currentRole;
  const color = ROLE_COLOR[currentRole] ?? 'var(--text-muted)';

  const handleChange = async (e: SelectChangeEvent) => {
    if (isSelf) {
      toast.error('Ви не можете змінювати собі роль');
      return;
    }
    try {
      await onUpdate(userId, e.target.value as ROLE);
      onRefresh();
      toast.success('Успішно оновлено');
    } catch {
      toast.error('Сталася помилка');
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Box
        sx={{
          px: 1.25,
          py: 0.25,
          borderRadius: '6px',
          background: `${color}18`,
          border: `1px solid ${color}40`,
          color,
          fontSize: 12,
          fontWeight: 600,
          fontFamily: 'var(--font-head)',
          minWidth: 72,
          textAlign: 'center',
          flexShrink: 0,
        }}
      >
        {roleLabel}
      </Box>
      <Select
        size="small"
        value={currentRole}
        onChange={handleChange}
        disabled={isSelf}
        sx={{ fontSize: 13, minWidth: 150 }}
      >
        {userRoleOptions.map((opt) => (
          <MenuItem key={opt.value} value={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

const Settings = () => {
  const { getAllUsers, allUsers, updateUser, user } = useAuthStore();

  useEffect(() => {
    getAllUsers();
  }, []);

  const rows: User[] = allUsers
    .filter((u) => u.username !== 'root')
    .map((u) => ({ ...u, id: u._id }));

  const columns: GridColDef<(typeof rows)[number]>[] = [
    {
      field: 'username',
      headerName: 'Нікнейм',
      width: 300,
    },
    {
      field: 'role',
      headerName: 'Роль',
      flex: 1,
      renderCell: (params) => (
        <RoleCell
          userId={params.row._id}
          currentRole={params.value}
          isSelf={params.row.username === user?.username}
          onUpdate={updateUser}
          onRefresh={getAllUsers}
        />
      ),
    },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.title}>Налаштування юзерів</div>
        <div className={styles.subtitle}>Управляй ролями учасників</div>
      </div>

      <CustomTable rows={rows} columns={columns} />
    </div>
  );
};

export default Settings;
