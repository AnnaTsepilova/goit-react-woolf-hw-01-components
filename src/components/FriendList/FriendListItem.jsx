import css from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={isOnline === true ? css.online : css.offline}></span>
      <img className={css.friendAvatar} src={avatar} alt={name} width="48" />
      <p className={css.friendName}>{name}</p>
    </li>
  );
};

export default FriendListItem;
