import { BehaviorSubject } from "rxjs";
import getConfig from "next/config";
import Router from "next/router";
import { fetchWrapper } from "../helpers";
const { publicRuntimeConfig } = getConfig();
const baseUrl = `http://localhost:3000`;
const userSubject = new BehaviorSubject(
  process.browser && JSON.parse(localStorage.getItem("user"))
);
// const userLocal = JSON.parse(localStorage.getItem("user"));

export const userService = {
  user: userSubject.asObservable(),
  get userValue() {
    console.log("usersubject", userSubject);
    return userSubject.value;
  },
  login,
  logout,
};
function login(username, password) {
  return fetchWrapper
    .login(`${baseUrl}/auth/signin`, { username, password })
    .then((user) => {
      // publish user to subscribers and store in local storage to stay logged in between page refreshes
      userSubject.next(user);
      localStorage.setItem("user", JSON.stringify(user));

      return user;
    });
}
function logout() {
  // remove user from local storage, publish null to user subscribers and redirect to login page
  localStorage.removeItem("user");
  userSubject.next(null);
  Router.push("/account/login");
}
