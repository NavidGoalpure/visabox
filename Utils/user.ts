import { LocalStorageKeys } from 'Interfaces';
import { UserRole } from 'Interfaces/Database';
import { deleteAllCookies, getLocalStorage, removeALLLocalStorage } from 'Utils';
import { signOut } from 'next-auth/react';

function isAgancyLogedIn(session: import('next-auth').Session | null): boolean {
  return (
    !!session?.user?.email &&
    getLocalStorage(LocalStorageKeys.UserRole) === UserRole.Agency
  );
}
function isClientLogedIn(session: import('next-auth').Session | null): boolean {
  return (
    !!session?.user?.email &&
    getLocalStorage(LocalStorageKeys.UserRole) === UserRole.Client
  );
}
function Logout() {
  removeALLLocalStorage();
  deleteAllCookies();
  signOut();
}
export { isAgancyLogedIn, isClientLogedIn, Logout };
