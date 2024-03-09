import FriendListItem from "./FriendListItem"

const FriendList = ({friends}) => {
  return (<div>
            <ul>
              {friends.map(({ id, avatar, name, isonline = false })  => {
                return (
                 <FriendListItem 
                   key={id} 
                   id={id}
                   avatar={avatar} 
                   name={name} 
                   isonline={isonline}
                 />
                );
              })
              }
            </ul>
         </div>)
}

export default FriendList;

