import { useCookie } from "#imports";
import { useRouter } from "vue-router";
import { useNuxtApp } from "#app";

interface Credentials {
  username: string;
  password: string;
}

export function useAuth() {
  const router = useRouter();
  const { $axios } = useNuxtApp();
  const authCookie = useCookie("AUTH", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });

  const login = async (credentials: Credentials) => {
    try {
      await useApiFetch("/auth/login", {
        method: "POST",
        body: credentials,
      });
      router.push("/admin/admin");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const logout = async () => {
    try {
      await useApiFetch("/auth/logout");
      router.push("/admin/login"); // Redirecting to the login page
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return { login, logout };
}
