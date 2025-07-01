/* eslint-disable @typescript-eslint/no-explicit-any */
// src/utils/decodeToken.ts

import { jwtDecode } from 'jwt-decode';

export interface DecodedToken {
  id: string;
  email: string;
  name: string;
  photoUrl: string | null;
  iat?: number;
  exp?: number;
  [key: string]: any;
}

const decodeToken = (token: string): DecodedToken | null => {
  try {
    const decoded = jwtDecode<DecodedToken>(token);
    return decoded;
  } catch (error) {
    console.error('Invalid token:', error);
    return null;
  }
};

export default decodeToken;
