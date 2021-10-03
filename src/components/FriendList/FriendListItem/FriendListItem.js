import styles from "../FriendList.module.css";
import PropTypes from "prop-types";

export function FriendListItem({ id, isOnline, avatar, name }) {
  return (
    <li className={styles.item} key={id}>
      <span className={isOnline ? styles.online : styles.offline}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="148" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.defaultProps = {
  avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  name: "User",
};

FriendListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
};
