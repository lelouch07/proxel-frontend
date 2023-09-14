import React, { ReactNode } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Login from './components/login/login';
import Signup from './components/signup/signup';

const App: React.FC = () => {
  const LoginComp: ReactNode = <Login />;
  const SignupComp: ReactNode = <Signup />;
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/login" element={LoginComp} />
        <Route path="/signup" element={SignupComp} />
      </Routes>
    </Router>
  );
};

export default App;
