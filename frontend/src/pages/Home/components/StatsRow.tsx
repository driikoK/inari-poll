import { StatCard } from './StatCard';
import styles from '../Home.module.scss';
import { CookieOutlined, Person2Outlined } from '@mui/icons-material';
import { MemberType } from '@/types';

const CrownIcon = () => {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
      <path d="M2 20h20v2H2zM4 18L2 8l6 4 4-8 4 8 6-4-2 10H4z" />
    </svg>
  );
};

type Props = {
  membersQuantity: number;
  totalCoins: number;
  leader: MemberType | null;
};

export const StatsRow = ({ membersQuantity, totalCoins, leader }: Props) => {
  return (
    <div className={styles.statsRow}>
      <StatCard
        label="Учасників"
        value={membersQuantity}
        color="var(--accent)"
        icon={<Person2Outlined />}
        delay={0.05}
      />
      <StatCard
        label="Крихт не виведено"
        value={totalCoins.toLocaleString('uk-UA')}
        sub="загалом"
        color="var(--teal)"
        icon={<CookieOutlined />}
        delay={0.1}
      />
      {leader && (
        <StatCard
          label="Лідер"
          value={leader.nickname}
          sub={`${leader.coins} крихт`}
          color="var(--yellow)"
          icon={<CrownIcon />}
          delay={0.15}
        />
      )}
    </div>
  );
};
