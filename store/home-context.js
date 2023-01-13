
import { createContext, useEffect, useState } from 'react';

export const HomeDataContext = createContext({
  token: '',
  isAuthenticated: false,
});

function HomeDataContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();

  function authenticate(token) {
    setAuthToken(token);
    AsyncStorage.setItem('token', token);
  }

  function logout() {
    setAuthToken(null);
    AsyncStorage.removeItem('token');
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };

  return <HomeDataContext.Provider value={value}>{children}</HomeDataContext.Provider>;
}

export default HomeDataContextProvider;
