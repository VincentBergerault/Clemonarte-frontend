export const useApiFetch = async (url: string, options = {}) => {
  const config = useRuntimeConfig();
  return await useFetch(`${config.public.apiBase}/${url}`, options);
};
