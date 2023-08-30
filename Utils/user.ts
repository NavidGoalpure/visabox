import { LocalStorageKeys } from 'Interfaces';
import { UserRole } from 'Interfaces/Database';
import { deleteAllCookies, getLocalStorage, removeALLLocalStorage } from 'Utils';
import { signOut } from 'next-auth/react';

function isAgancyLogedIn(session: import('next-auth').Session | null): boolean {
  return (
    !!session?.user?.email &&
    getLocalStorage(LocalStorageKeys.User_Role) === UserRole.Agency
  );
}
function isClientLogedIn(session: import('next-auth').Session | null): boolean {
  return (
    !!session?.user?.email &&
    getLocalStorage(LocalStorageKeys.User_Role) === UserRole.Client
  );
}
function Logout() {
  removeALLLocalStorage();
  deleteAllCookies();
  signOut();
}
export { isAgancyLogedIn, isClientLogedIn, Logout };
