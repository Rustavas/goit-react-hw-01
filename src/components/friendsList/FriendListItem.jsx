import css from "./FriendsListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.friendListItem}>
      <img src={avatar} alt="Avatar" width="90" />
      <p>{name}</p>
      {isOnline ? (
        <p className={css.isonline}>Online</p>
      ) : (
        <p className={css.offline}>Offline</p>
      )}
    </div>
  );
};

export default FriendListItem;
