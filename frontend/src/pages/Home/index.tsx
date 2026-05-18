import { FunctionComponent, useEffect, useMemo } from 'react';

import { useAuthStore, useMembersStore } from '@/stores';
import styles from './Home.module.scss';
import { MainCard, StatsRow, LeaderBoard } from './components';

const LEADERS_TO_SHOW = 3;

const Home: FunctionComponent = () => {
  const { isLoggedIn } = useAuthStore();
  const { members, getMembers } = useMembersStore();

  useEffect(() => {
    if (isLoggedIn) {
      getMembers();
    }
  }, [isLoggedIn]);

  const sortedMembers = useMemo(() => {
    return [...members].sort((a, b) => b.coins - a.coins);
  }, [members]);
  const totalCoins = useMemo(
    () => members.reduce((sum, member) => sum + member.coins, 0),
    [members],
  );

  return (
    <div className={styles.page}>
      <MainCard isLoggedIn={isLoggedIn} />

      <div className={styles.pageStatistics}>
        {isLoggedIn && sortedMembers.length >= LEADERS_TO_SHOW && (
          <LeaderBoard sortedMembers={sortedMembers} />
        )}

        {isLoggedIn && members.length > 0 && (
          <StatsRow
            membersQuantity={members.length}
            totalCoins={totalCoins}
            leader={sortedMembers[0]}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
