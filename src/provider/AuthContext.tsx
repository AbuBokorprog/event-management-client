/* eslint-disable react-refresh/only-export-components */
// src/context/AuthContext.tsx
import { createContext, useContext, useMemo, type ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import decodeToken, { type DecodedToken } from '../utils/decodeToken';
import { logout } from '../redux/features/auth-slice/AuthSlice';

interface AuthContextType {
  user: DecodedToken | null;
  logoutHandler: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state: RootState) => state.auth);

  const user = token ? decodeToken(token) : null;

  const logoutHandler = () => {
    dispatch(logout());
  };

  const contextValue = useMemo(() => ({ user, logoutHandler }), [user]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
