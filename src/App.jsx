import React from 'react';
import { Routes, Route } from 'react-router-dom';

// LAYOUTS
import Default from './layouts/Default';

// PAGES
import Landing from './pages/Landing';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="App">
      <Routes>
          <Route 
            path="/" 
            element={
              <Default>
                <Landing />
              </Default>
            } 
          />
          <Route 
            path="/sign-in" 
            element={
              <Default>
                <SignIn />
              </Default>
            } 
          />
          <Route 
            path="/sign-up" 
            element={
              <Default>
                <SignUp />
              </Default>
            } 
          />
          <Route 
            path="/dashboard" 
            element={
              <Default>
                <Home />
              </Default>
            } 
          />
      </Routes>
    </div>
  );
};

export default App;