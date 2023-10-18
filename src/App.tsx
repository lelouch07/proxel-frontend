import React, { ReactNode } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignup from './components/authentication/LoginSignup';
import Homepage from './components/Homepage/Homepage';
import Profile from './components/profile/profile';
// import { CookiesProvider } from 'react-cookie';
const App: React.FC = () => {
  const LoginSignupComp: ReactNode = <LoginSignup />;
  const HomepageComp: ReactNode = <Homepage />;
  const ProfileComp: ReactNode = <Profile />;

    return( 
    <>
      {/* <link>Authenticate</link> */}
      <Router>
      <Routes>
        <Route path="/auth" element={LoginSignupComp} />
        <Route path="/home" element={HomepageComp} />
        <Route path="/profile" element={ProfileComp} />
        {/* <Route path="/auth" element={LoginSignupComp} /> */}
      </Routes>
    </Router>
    </>
  );

};

export default App;


