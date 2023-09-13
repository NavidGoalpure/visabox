import { LocalStorageKeys } from 'Interfaces';
import { UserRole } from 'Interfaces/Database';
import {
  deleteAllCookies,
  getLocalStorage,
  removeALLLocalStorage,
} from 'Utils';
import { signOut } from 'next-auth/react';

function isAgencyLogedIn(): boolean {
  return getLocalStorage(LocalStorageKeys.User_Role) === UserRole.Agency;
}
function isClientLogedIn(): boolean {
  return getLocalStorage(LocalStorageKeys.User_Role) === UserRole.Client;
}
function isLogout(): boolean | null {
  if (
    typeof window !== 'undefined' &&
    getLocalStorage(LocalStorageKeys.User_Role) === null
  )
    return true;

  if (
    typeof window !== 'undefined' &&
    getLocalStorage(LocalStorageKeys.User_Role) !== null
  )
    return false;

  return null;
}

function Logout(redirect?: string) {
  removeALLLocalStorage();
  deleteAllCookies();
  if (redirect) signOut({ callbackUrl: redirect });
  else {
    signOut();
  }
}
export { isAgencyLogedIn, isClientLogedIn, Logout, isLogout };
