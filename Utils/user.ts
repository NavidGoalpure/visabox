import { LocalStorageKeys } from "Interfaces";
import { UserRole } from "Interfaces/Database";
import {
  deleteAllCookies,
  getLocalStorage,
  removeALLLocalStorage,
} from "Utils";
import { signOut } from "next-auth/react";

function isAgencyLogedIn(): boolean {
  return getLocalStorage(LocalStorageKeys.User_Role) === UserRole.Agency;
}
function isClientLogedIn(): boolean {
  return getLocalStorage(LocalStorageKeys.User_Role) === UserRole.Client;
}
function Logout(redirect?: string) {
  removeALLLocalStorage();
  deleteAllCookies();
  if (redirect) signOut({ callbackUrl: redirect });
  else {
    signOut();
  }
}
export { isAgencyLogedIn, isClientLogedIn, Logout };
