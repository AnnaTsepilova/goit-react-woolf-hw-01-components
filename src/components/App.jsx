import Profile from './Profile/Profile';
import userData from './data/user.json';

export const App = () => {
  console.log('userData', userData);
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
};
