import css from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.description}>
      <img className={css.avatar} src={avatar} alt={username} width="100" />
      <p className={css.name}>{username}</p>
      <p className={css.text}>@{tag}</p>
      <p className={css.text}>{location}</p>
      <ul className={css.stats}>
        <li className={css.statsCell}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li className={css.statsCell}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li className={css.statsCell}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
