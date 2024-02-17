export const useMyFetch: typeof useFetch = (path, options = {}) => {
  const config = useRuntimeConfig();

  // modify options as needed
  options.baseURL = config.public.baseUrl;
  return useFetch(path, options);
};
