import { FunctionComponent } from 'react';
import styles from '../Home.module.scss';

export const StatCard: FunctionComponent<{
  label: string;
  value: string | number;
  sub?: string;
  color: string;
  icon: React.ReactNode;
  delay?: number;
}> = ({ label, value, sub, color, icon, delay = 0 }) => (
  <div className={`fade-up ${styles.statCard}`} style={{ animationDelay: `${delay}s` }}>
    <div className={styles.statCardHeader}>
      <div>
        <div className={styles.statCardLabel}>{label}</div>
        <div className={styles.statCardValue} style={{ color }}>
          {value}
        </div>
        {sub && <div className={styles.statCardSub}>{sub}</div>}
      </div>
      <div className={styles.statCardIcon} style={{ background: `${color}18`, color }}>
        {icon}
      </div>
    </div>
  </div>
);
