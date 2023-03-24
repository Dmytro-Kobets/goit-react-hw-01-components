import { Profile } from './Profile/Profile';
import profiles from '../data/user.json';
import { StatisticsList } from './Statistics/StatisticsList';
import statistics from '../data/data.json';
import { FriendListItem } from './FriendList/FriendListItem';
import friends from '../data/friends.json';
import { TransactionTable } from './TransactionHistory/TransactionTable';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <div>
        <Profile profiles={profiles} />
      </div>
      <div>
        <StatisticsList statistics={statistics} />
      </div>
      <div>
        <FriendListItem friends={friends} />
      </div>
      <div>
        <TransactionTable transactions={transactions} />
      </div>
    </>
  );
};
