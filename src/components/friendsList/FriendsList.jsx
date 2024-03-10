import clsx from "clsx";
import FriendListItem from "./FriendListItem"
import css from "./friendsList.module.css"

const FriendList = ({friends}) => {
  return (
            <ul className={css.friend_list}>
              {friends.map(({ id, avatar, name, isOnline })  => {
                return (
                 <FriendListItem 
                   key={id} 
                   id={id}
                   avatar={avatar} 
                   name={name} 
                   isOnline={isOnline}
                  
                 />
                );
              })
              }
            </ul>
  )
}

export default FriendList;

