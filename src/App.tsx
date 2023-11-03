import React, { ReactNode } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignup from './components/authentication/LoginSignup';
import Homepage from './components/Homepage/Homepage';
import Profile from './components/profile/profile';
import Messages from './components/Messages/messages';
// import { CookiesProvider } from 'react-cookie';
const App: React.FC = () => {
  const LoginSignupComp: ReactNode = <LoginSignup />;
  const HomepageComp: ReactNode = <Homepage />;
  const ProfileComp: ReactNode = <Profile />;
  const MessageComp: ReactNode = <Messages />;

    return( 
    <>
      {/* <link>Authenticate</link> */}
      <Router>
      <Routes>
        {/* <Route path="/" element={<HomepageComp/>}></Route> */}
        <Route path="/auth" element={LoginSignupComp} />
        <Route path="/" element={HomepageComp} />
        <Route path="/profile" element={ProfileComp} />
        <Route path="/messages" element={MessageComp} />
        {/* <Route path="/auth" element={LoginSignupComp} /> */}
      </Routes>
    </Router>
    </>
  );

};

export default App;


