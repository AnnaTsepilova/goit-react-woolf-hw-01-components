import Profile from './Profile/Profile';
import userData from './data/user.json';

import Statistics from './Statistics/Statistics';
import statsData from './data/data.json';

import FriendList from './FriendList/FriendList';
import friendsData from './data/friends.json';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactionsData from './data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={statsData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionsData} />;
    </>
  );
};
