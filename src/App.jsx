import './App.css'
import Profile from "./components/profile/Profile"
import userData from "./components/profile/UserData"

import FriendList  from './components/friendsList/FriendsList'
import friends from "./components/friendsList/FriendsListData.json"

import TransactionHistory from './components/transactionHistory/TransactionHistory'
import transactions from "./components/transactionHistory/TransactionHistoryData.json"

function App() {
  return (
    <>
      <Profile 
       name={userData.username}
       tag={userData.tag}
       location={userData.location}
       image={userData.avatar}
       stats={userData.stats} 
      />
      <FriendList 
        friends = {friends} 
      />
      <TransactionHistory 
      items = {transactions}
      />
    </>
  )
}

export default App;
