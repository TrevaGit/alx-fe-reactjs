import { useContext } from 'react';
import UserContext from './UserContext';

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '10px',
        margin: '10px',
        borderRadius: '8px'
      }}
    >
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
