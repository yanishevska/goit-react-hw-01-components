import { FriendListItem } from "./FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";

export function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ id, isOnline, avatar, name }) => {
        return (
          <FriendListItem
            key={id}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
          />
        );
      })}
    </ul>
  );
}
