export default defineNuxtRouteMiddleware((to, from) => {
  // isAuthenticated() is an example method verifying if a user is authenticated
  if (isAuthenticated() === false) {
    return navigateTo("/login");
  }

  // https://dev.to/rafaelmagalhaes/authentication-in-nuxt-3-375o
  console.log("From auth middleware");
});

function isAuthenticated(): boolean {
  return true;
}
