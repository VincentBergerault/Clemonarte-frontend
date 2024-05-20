export const useApiFetch = async (url: string, options: any = {}) => {
  const config = useRuntimeConfig();
  options.baseURL = removeTrailingSlash(config.public.apiBase); // Your backend base URL
  options.credentials = "include"; // Include cookies for authentication
  const { data, pending, error, refresh } = await useFetch(url, options);

  if (error.value) {
    const responseError = new Error(
      `HTTP error! status: ${error.value?.statusCode}`
    );
    responseError.message = error.value?.message as string;
    console.log(
      `Http error ! status: ${error.value?.statusCode}, message: ${error.value?.message}`
    );
    throw responseError;
  }

  return { data };
};

function removeTrailingSlash(url: string): string {
  if (url.endsWith("/")) {
    return url.slice(0, -1);
  }
  return url;
}
