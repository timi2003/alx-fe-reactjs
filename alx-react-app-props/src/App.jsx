import React from 'react';
import ProfilePage from './components/ProfilePage';
import { UserContext } from './components/UserContext';


function App() {
    const userData = useState( 
        { name: "Jane Doe", email: "jane.doe@example.com" });
 return(
    <>
    <UserContext.provider value={userData}>
    <ProfilePage />;
      </UserContext.provider>
      </>
 );
}
export default App;
