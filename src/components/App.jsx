import { Profile } from './Profile/Profile';
import profiles from '../data/user.json';
import { StatisticsList } from './Statistics/StatisticsList';
import statistics from '../data/data.json';
import { FriendListItem } from './FriendList/FriendListItem';
import friends from '../data/friends.json';
import { TransactionTable } from './TransactionHistory/TransactionTable';
import transactions from '../data/transactions.json';
import { Section } from './App.styled';

export const App = () => {
  return (
    <>
      <Section>
        <Profile profiles={profiles} />
      </Section>
      <Section>
        <StatisticsList statistics={statistics} title="Upload Stats" />
      </Section>
      <Section>
        <FriendListItem friends={friends} />
      </Section>
      <Section>
        <TransactionTable transactions={transactions} />
      </Section>
    </>
  );
};
