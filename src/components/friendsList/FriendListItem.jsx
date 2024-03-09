

const FriendListItem = ({ avatar, name, isonline = false }) => {
  return <div>
            <img src={ avatar }alt="Avatar" width="48" />
            <p>{ name }</p>
            <p>{ isonline }</p>
         </div>
};

export default FriendListItem;