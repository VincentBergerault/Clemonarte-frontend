export default defineNuxtRouteMiddleware(async (to, from) => {
  // isAuthenticated() is an example method verifying if a user is authenticated

  if (!(await isAuthenticated())) {
    return navigateTo("/admin/login");
  }
});

async function isAuthenticated(): Promise<boolean> {
  try {
    await useApiFetch("admin/verify-token");
    return true;
  } catch (error: any) {
    return false;
  }
}
