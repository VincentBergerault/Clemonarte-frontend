export default defineNuxtRouteMiddleware(async (to, from) => {
  // isAuthenticated() is an example method verifying if a user is authenticated
  if ((await isAuthenticated()) === false) {
    return navigateTo("/admin/login");
  }
});

async function isAuthenticated(): Promise<boolean> {
  try {
    await useApiFetch("/auth/verify-token");
    return true;
  } catch (error) {
    return false;
  }
}
