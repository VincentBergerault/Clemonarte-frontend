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
      await useApiFetch("admin/login", {
        method: "POST",
        body: credentials,
      });
      router.push("/admin/admin");
    } catch (error: any) {
      router.push("/admin/login");
    }
  };

  const logout = async () => {
    try {
      await useApiFetch("admin/logout");
      router.push("/admin/login"); // Redirecting to the login page
    } catch (error: any) {
      router.push("/admin/login"); // Redirecting to the login page
    }
  };

  return { login, logout };
}
